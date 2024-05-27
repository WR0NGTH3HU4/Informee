import type { Post, PostAuthor } from "./Post";

export interface Review {
  _id: string;
  author: PostAuthor;
  post: Post;
  value: number;
  content: string;
  updateDate: string;
  creationDate: string;
  __v: number;
}
