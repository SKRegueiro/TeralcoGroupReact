import Comment from '../types/Comment';
import React from 'react';

type CommentProps = {
  comment: Comment;
};
const CommentCard = (props: CommentProps) => {
  const { comment } = props;

  return (
    <div className="bg-white flex h-1/5  w-full p-4 my-4 rounded  shadow-md">
      <div className=" w-1/5 h-full mr-4 flex flex-col justify-center items-center p-2 mr-4">
        <img
          className="rounded-full h-full w-auto"
          src={comment.user.avatar_url}
          alt={'user avatar'}
        />
        <p>{comment.user.login}</p>
      </div>
      <p className="p-2 w-4/5">{comment.body}</p>
    </div>
  );
};

export default CommentCard;
