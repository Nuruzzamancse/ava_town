import React, { ChangeEvent, useState } from "react";
import { Props } from "./types";

const GroupCheckbox: React.FC<Props> = (props) => {
  const { options, className = "", legend } = props;
  const [selectedValue, setSelectedValue] = useState("");

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };
  const name = legend?.toLowerCase();
  return (
    <>
      <legend className="text-lg font-medium">{legend}</legend>
      {options &&
        options.map((option) => (
          <div className="ml-3">
            <input
              type="checkbox"
              id={option}
              name={name}
              value={option}
              className="mr-2"
              checked={selectedValue === option}
              onChange={(e) => handleCheckboxChange(e)}
            />
            <label htmlFor={name}>{option}</label>
          </div>
        ))}
    </>
  );
};

export default GroupCheckbox;
