import React from "react";
import { HiSearch } from "react-icons/hi";
import classNames from "clsx";

import { Props } from "./types";

const Search: React.FC<Props> = (props) => {
  const { className = "" } = props;
  return (
    <div
      className={classNames({
        "bg-white flex px-2 items-center rounded": true,
        [className]: true,
      })}
    >
      <input className="h-[29px] w-[calc(100%-16px)] focus:outline-none" />
      <HiSearch />
    </div>
  );
};

export default Search;
