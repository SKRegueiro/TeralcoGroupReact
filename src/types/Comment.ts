import User from './User';

type Comment = {
  body: string;
  created_at: string;
  id: number;
  user: User;
};

export default Comment;
