import User from './User';
import Label from './Label';
import Comment from './Comment';

type Issue = {
  id: number;
  url: string;
  comments_url: string;
  comment_list: Comment[];
  number: number;
  state: string;
  title: string;
  body: string;
  user: User;
  labels: Label[];
  comments: number;
  pull_request?: any;
  closed_at?: string;
  created_at: string;
  updated_at?: string;
};

export default Issue;
