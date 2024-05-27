export interface PostAuthor {
  _id: string;
  displayName: string;
  username: string;
}

export interface Post {
  _id: string;
  author: PostAuthor;
  title: string;
  tags: string[];
  private: boolean;
  description: string;
  content: string;
  updateDate: string;
  creationDate: string;
  __v: number;
}
