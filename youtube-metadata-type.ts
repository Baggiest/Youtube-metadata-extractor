import thumbnails from "./youtube-thumbnail-object-type";

export default interface youtubeMetadata {

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

}
