import CommentCard from './CommentCard';
import React from 'react';
import Issue from '../types/Issue';
import Comment from '../types/Comment';

type ModalProps = {
  issue?: Issue;
};

const Modal = (props: ModalProps) => {
  const { issue } = props;

  if (!issue) return null;
  return (
    <main className="bg-gray-100 w-full h-full overflow-scroll p-4">
      <h1 className="text-4xl text-center font-bold h-auto py-8">{issue.title}</h1>
      <p className="">{issue.body}</p>
      <div className="">
        {issue.comment_list.map((comment: Comment) => {
          return <CommentCard comment={comment} />;
        })}
      </div>
    </main>
  );
};

export default Modal;
