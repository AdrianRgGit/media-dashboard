export interface DataInfo {
  data: (
    | { followers: number; views: number; likes: number }
    | { followers: number; retweets: number; likes: number }
  )[];
}
