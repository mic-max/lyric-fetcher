# Lyric Fetcher

![NPM Version](https://img.shields.io/npm/v/lyric-fetcher.svg)

> Fetches lyrics to songs from online sources

## Example

```js
const lyrics = require('lyrics-fetcher')

let songInfo = {
    artist: 'The Fratellis',
      song: 'Chelsea Dagger'
}

lyrics(songInfo, (err, data) => {
    if (err)
        return console.error(err)
    console.log(data)
})
```
