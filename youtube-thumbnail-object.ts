export default interface thumbnails {
    default: thumbnailObject,
    medium: thumbnailObject,
    high: thumbnailObject,
    standard: thumbnailObject,
    maxres: thumbnailObject,
}

interface thumbnailObject {
    url: string,
    width: number,
    height: number
}
