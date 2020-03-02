'use strict'

const cheerio = require('cheerio')
const fetch = require('node-fetch')

function createUrl(artist, song) {
	const whole = `${artist.replace(/^the /ig, '')}/${song.replace(/\//g, '')}`
	const lyricsLink = whole.toLowerCase()
		.replace(/\(.*?\)/g, '')
		.replace(/[^a-z0-9/]/g, '')
	return `https://www.azlyrics.com/lyrics/${lyricsLink}.html`
}

function azlyrics(music, done) {
	let link = createUrl(music.artist, music.song)

	fetch(link)
		.then(res => res.text())
		.then(body => {
			let $ = cheerio.load(body)

			// Check if redirected to homepage
			if ($('h1').eq(0).text() == 'Welcome to AZLyrics!')
				throw new Error()

			const rawData = $('div').eq(19).text().trim()
			done(null, rawData)
		})
		.catch(err => {
			return done('Not Available on AZLyrics')
		})
}

module.exports = azlyrics
