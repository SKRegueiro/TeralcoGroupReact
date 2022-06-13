import logo from '../assets/githubLogo.svg';
import React from 'react';

type SearchBarProps = {
  onChange: Function;
  onSearch: Function;
};
const SearchBar = (props: SearchBarProps) => {
  const { onChange, onSearch } = props;

  return (
    <div>
      <a target="_blank" href="https://github.com">
        <img className="absolute top-2 left-2 h-8 w-auto" src={logo} alt="github logo" />
      </a>
      <label className="block text-center text-gray-700 text-sm font-bold mb-2">
        Find a repository
      </label>
      <div className="flex justify-around w-full">
        <input
          className="shadow appearance-none border rounded h-14 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(event) => onChange(event.target.value)}
          id="username"
          type="text"
          placeholder="e.g. pepito/CoolRepo"
        />
        <button className="rounded bg-blue-500 p-3 ml-2 text-white" onClick={() => onSearch()}>
          search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
