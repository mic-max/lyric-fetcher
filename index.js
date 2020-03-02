'use strict'

const lyrics = [
	require('./sources/azlyrics'),
	require('./sources/musixmatch'),
	require('./sources/genius'),
	'LAST'
]

function loadLyrics(music, done) {
	for (let lyric of lyrics) {
		if (lyric === 'LAST')
			return done('Lyrics Not Found Anywhere')

		lyric(music, (err, data) => {
			if (!err)
				done(null, data)
		})
	}
}

module.exports = lyrics[0]
