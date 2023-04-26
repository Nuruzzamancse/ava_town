import React from "react";
import { FaCaretDown } from "react-icons/fa";
import classNames from "clsx";

import { Props } from "./types";

const Select: React.FC<Props> = (props) => {
  const { className = "", options, placeholder, onChange } = props;
  return (
    <div
      className={classNames({
        "flex items-center justify-between bg-white relative ": true,
        [className]: true,
      })}
    >
      <select
        name="select"
        className="text-xs appearance-none font-inter outline-none border-none w-full font-medium text-black"
        onChange={onChange}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options &&
          options.map((option) => <option value={option}>{option}</option>)}
      </select>
      <FaCaretDown className="absolute right-[2px]" />
    </div>
  );
};

export default Select;
