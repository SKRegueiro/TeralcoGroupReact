import React, { useState } from 'react';
import { axios } from '../lib/axios';
import SearchBar from '../components/SearchBar';
import IssueList from '../components/IssueList';
import Issue from '../types/Issue';
import Modal from '../components/Modal';

function App() {
  const [search, setSearch] = useState<string>('');
  const [issues, setIssues] = useState<Issue[]>([]);
  const [selectedIssue, setSelectedIssue] = useState<Issue>();

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="relative flex flex-col justify-center items-center w-full h-1/3 bg-gray-400">
        <div className="relative bg-gray-200 shadow-md rounded px-12 pt-8 pb-8 m-8 w-1/3">
          <SearchBar
            onChange={(target: string) => setSearch(target)}
            onSearch={async () => {
              const response = await axios.get(`/repos/${search}/issues`);
              console.log(response.data);
              setIssues(response.data);
            }}
          />
        </div>
      </div>
      <div className=" flex flex-row w-full h-2/3 overflow-hidden">
        <div className="overflow-y-scroll p-4 w-1/3 h-full bg-white">
          <IssueList
            onClick={async (issue: Issue) => {
              const response = await axios.get(`/repos/${search}/issues/${issue.number}/comments`);
              issue.comment_list = response.data;
              setSelectedIssue(issue);
            }}
            issues={issues}
          />
        </div>

        <div className="p-4 w-2/3 h-full ">
          <Modal issue={selectedIssue} />
        </div>
      </div>
    </div>
  );
}

export default App;
