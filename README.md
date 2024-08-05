## A simple function that takes 2 arguments and returns channel/video analytics + thumbnails

```js
fetchYoutubeMetadata(YT_KEY: string, YT_VIDEO_ID: string)
```

for example youtube.com/watch?v=DWJh0Dny5Ug 
the YT_VIDEO_ID is **DWJh0Dny5Ug**

# returned analytics
the returned data is an object formatted in this shape 
```js
    request: {
        request_timestamp: number;
    }

    video: {

        statistics: {
            view_count: number,
            like_count: number,
            comment_count: number,
        },

        video_id: string,
        video_title: string,
        video_description: string,
        video_published_date: string,
        video_thumbnails: thumbnails,
    }

    channel: {

        statistics: {
            view_count: number,
            sub_count: number,
            video_count: number
        },

        channel_title: string,
        channel_id: string,
        channel_creation_date: string,
        channel_country: string,
        channel_description: string,
        channel_handle: string,
    }
```
## returned thumbnails
if you look closely in the analytics object above in the video section you'll see `video_thumbnails: thumbnails`
and that type looks something like this 

```ts
thumbnails {
    default: thumbnailObject,
    medium: thumbnailObject,
    high: thumbnailObject,
    standard: thumbnailObject,
    maxres: thumbnailObject,
}

thumbnailObject {
    url: string,
    width: number,
    height: number
}
```
