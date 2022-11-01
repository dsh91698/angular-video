import { IVideoStatistics } from './IVideoStatistics';
import { IVideoSnippet } from './IVideoSnippet';

export interface IYouTubeItem {
  kind?: string,
  etag: string,
  id: { 
    kind?: string,
    videoId: string 
  }, 
  snippet: IVideoSnippet,
  statistics: IVideoStatistics,
}
  

export interface IRapidApiResponceWithStatistics {
  kind: string,
  etag: string,
  items: [
    {
      kind: string,
      etag: string,
      id: string,
      statistics: {
        viewCount: string,
        likeCount: string,
        favoriteCount: string,
        commentCount: string
      }
    },
  ],
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  }
}