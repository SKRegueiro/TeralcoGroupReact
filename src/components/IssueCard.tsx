import React from 'react';
import Issue from '../types/Issue';
import Label from '../types/Label';
import comments from '../assets/comments.svg';

type IssueCardProps = {
  issue: Issue;
  onClick: (issue: Issue) => void;
};

const IssueCard = (props: IssueCardProps) => {
  const { issue, onClick } = props;
  const isPR = !!issue.pull_request;
  const createdAt = new Date(Date.parse(issue.created_at));
  const fullDate =
    createdAt.getFullYear() + '-' + (createdAt.getMonth() + 1) + '-' + createdAt.getDate();

  return (
    <div
      className="relative flex bg-gray-100 shadow-md rounded px-8 py-4 w-full  my-4"
      onClick={() => onClick(issue)}
    >
      <div className=" w-1/3 h-full mr-4 flex flex-col justify-center items-center">
        <img
          className="rounded-full h-2/3 w-auto"
          src={issue.user.avatar_url}
          alt={'user avatar'}
        />
        <p>{issue.user.login}</p>
      </div>
      <div className="flex flex-col justify-around w-2/3 h-full">
        <h1 className="font-bold h-2/4 ">{issue.title}</h1>

        <div className="flex w-full h-1/4 w-full">
          {issue.labels.map((label: Label) => {
            return (
              <div className={`bg-[#${label.color}] h-fit w-fit rounded p-2 `}>
                <p> {label.name}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between align-middle h-1/4 ">
          <p className="text-gray-600">{fullDate}</p>
          <div className="text-gray-600 flex flex-col items-center justify-center ">
            <p>{issue.comments}</p>
            <img className=" h-2 w-auto" src={comments} alt="comments logo" />
          </div>
          {isPR ? <p className="text-green-700">PR</p> : <p className="text-blue-500">Issue</p>}
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
