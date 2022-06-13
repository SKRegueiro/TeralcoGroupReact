import IssueCard from './IssueCard';
import React from 'react';
import Issue from '../types/Issue';

type IssueListProps = {
  issues: Issue[];
  onClick: (issue: Issue) => void;
};

const IssueList = (props: IssueListProps) => {
  const { issues, onClick } = props;

  return (
    <div>
      {issues.map((issue: Issue) => (
        <IssueCard key={issue.id} onClick={(issue: Issue) => onClick(issue)} issue={issue} />
      ))}
    </div>
  );
};

export default IssueList;
