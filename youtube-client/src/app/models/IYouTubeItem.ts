import { IVideoStatistics } from './IVideoStatistics';
import { IVideoSnippet } from './IVideoSnippet';

export interface IYouTubeItem {
  kind: string,
  etag: string,
  id: { 
    kind?: string,
    videoId: string 
  }, 
  snippet: IVideoSnippet,
  statistics: IVideoStatistics,
}
  