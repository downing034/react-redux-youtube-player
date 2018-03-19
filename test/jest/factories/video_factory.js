import { Factory } from 'rosie'
import Chance      from 'chance'

let chance = new Chance()


export const Video = new Factory()
  .attrs({
    kind: 'youtube#searchResult',
    etag: chance.string({length: 40}),
    id: {
      kind: "youtube#video",
      videoId: chance.string()
    },
    snippet: {
      publishedAt: "2017-11-20T13:59:36.000Z",
      channelId: chance.string({length: 24}),
      title: chance.sentence({words: 5}),
      description: chance.sentence({words: 5}),
      thumbnails: {
        default: {url: "https://i.ytimg.com/vi/0rVwuowU6Fs/default.jpg", width: 120, height: 90},
        high: {url: "https://i.ytimg.com/vi/0rVwuowU6Fs/hqdefault.jpg", width: 480, height: 360},
        medium: {url: "https://i.ytimg.com/vi/0rVwuowU6Fs/mqdefault.jpg", width: 320, height: 180}
      },
      title: chance.sentence({words: 5}),
    }
  })
