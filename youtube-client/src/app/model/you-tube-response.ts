export interface IVideoTumbnail  {
  url: string,
  width: number,
  height: number,
}

// export interface IResponseHeader {
//   kind: string,
//   etag: string,
//   pageInfo: {
//     totalResults: number,
//     resultsPerPage: number,
//   },
// }

export interface IYouTubeItem {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: string //'2019-05-30T12:42:19.000Z',
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: IVideoTumbnail,
      medium: IVideoTumbnail,
      high: IVideoTumbnail,
      standard: IVideoTumbnail,
      maxres: IVideoTumbnail,
    },
    channelTitle: string,
    tags: string[],
    categoryId: string, //'27',
    liveBroadcastContent: string, //'none',
    localized: {
      title: string,
      description: string,
    },
    defaultAudioLanguage: string, //'en-US',
  },
  statistics: {
    viewCount: string, //'33265',
    likeCount: string, //'1173',
    dislikeCount: string, //'26',
    favoriteCount: string, //'0',
    commentCount: string, //'170',
  },

}

export interface YouTubeResponse {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number,
  },
  items: IYouTubeItem[],
}