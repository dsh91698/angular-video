import { IVideoTumbnail } from './IVideoTumbnail';
import { IVideoLocalized } from './IVideoLocalized';

export interface IVideoSnippet {
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
  localized: IVideoLocalized,
  defaultAudioLanguage?: string, //'en-US',
  defaultLanguage?: string,
}
  