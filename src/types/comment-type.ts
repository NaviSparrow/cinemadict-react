export type CommentType = {
  id: number;
  author: string;
  comment: string;
  date: string;
  emotion: string;
}

export type CommentsListType = CommentType[];

export type CommentPostDataType = {
  comment: string;
  emotion: string;
};
