export interface Post {
  _id: string;
  authorId: string;
  title: string;
  tags: string[];
  private: boolean;
  description: string;
  content: string;
  updateDate: string;
  creationDate: string;
  __v: number;
}