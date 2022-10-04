import { IYouTubeItem } from './IYouTubeItem';

export interface IYouTubeResponse {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number,
  },
  items: IYouTubeItem[],
}