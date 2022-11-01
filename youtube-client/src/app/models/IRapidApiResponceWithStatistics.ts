//
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