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
      <select defaultValue={placeholder}
        name="select"
        className="text-xs appearance-none font-inter outline-none border-none px-[2px] w-full font-medium text-black"
        onChange={onChange}
      >
        <option  value={placeholder} disabled>
          {placeholder}
        </option>
        {options &&
          options.map((option, index) => (
            <option key={index} onChange={onChange} value={option}>
              {option}
            </option>
          ))}
      </select>
      <FaCaretDown className="absolute right-[2px]" />
    </div>
  );
};

export default Select;
