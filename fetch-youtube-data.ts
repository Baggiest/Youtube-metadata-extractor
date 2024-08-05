import youtubeMetadata from "types/youtube-metadata";

export default async function fetchYoutubeMetadata(YT_KEY: string, YT_VIDEO_ID: string) {

    // raw responses from google api
    let api_video_response: any;
    let api_channel_response: any;

    // parsed and neat part of the response 
    let video_response_body: any;
    let channel_response_body: any;

    // youtube API endpoint
    let api_video_url: string = `https://www.googleapis.com/youtube/v3/videos?id=${YT_VIDEO_ID}&part=snippet,statistics&key=${YT_KEY}`
    // we'll set this when we know the channel's id
    let api_channel_url: string

    /*
        we fetch data from the youtube video
        then use the channelId from the that data
        to make a second request and get data from the channel 
    */
    api_video_response = await fetch(api_video_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })

    // the raw response for the youtube video
    api_video_response = await api_video_response.json();

    // only the body of the response 
    video_response_body = api_video_response.items[0]

    api_channel_url = `https://www.googleapis.com/youtube/v3/channels?id=${video_response_body.snippet?.channelId}&part=snippet,statistics&key=${YT_KEY}`
    api_channel_response = await fetch(api_channel_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })

    // the entire response for the youtube channel
    api_channel_response = await api_channel_response.json();

    // only the body of the response
    channel_response_body = api_channel_response.items[0]


    // and the result issssss O-M-G cant forget the bev! neva neva neva (we assemble the result here)
    let response: youtubeMetadata = {

        request: {
            request_timestamp: Date.now()
        },

        video: {

            statistics: {
                view_count: parseInt(video_response_body.statistics.viewCount),
                like_count: parseInt(video_response_body.statistics.likeCount),
                comment_count: parseInt(video_response_body.statistics.commentCount)
            },

            video_id: video_response_body.id,
            video_title: video_response_body.snippet.title,
            video_description: video_response_body.snippet.description,
            video_published_date: video_response_body.snippet.publishedAt,
            video_thumbnails: video_response_body.snippet.thumbnails,
        },

        channel: {
            statistics: {
                view_count: parseInt(channel_response_body.statistics.viewCount),
                sub_count: parseInt(channel_response_body.statistics.subscriberCount),
                video_count: parseInt(channel_response_body.statistics.videoCount),
            },
            channel_title: video_response_body.snippet.channelTitle,
            channel_id: video_response_body.snippet.channelId,
            channel_creation_date: channel_response_body.snippet.publishedAt,
            channel_country: channel_response_body.snippet.country,
            channel_description: channel_response_body.snippet.description,
            channel_handle: channel_response_body.snippet.customUrl,
        },
    }

    return response;
}

// internal tool property of Creact 2023-2024

// may your dreams never die
// even if they do, never be sorry for trying 
// you only lose when you stop dreaming and trying
// to anyone who finds this 
// i love you for trying, keep going you got this <3
