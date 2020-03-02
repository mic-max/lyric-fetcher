# Lyric Fetcher

> Fetches lyrics to songs from online sources

## Example

```js
const lyrics = require('./index')

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
