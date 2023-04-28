import React, { ChangeEvent, useState } from "react";

import { Props } from "./types";

const GroupCheckbox: React.FC<Props> = (props) => {
  const { options, legend } = props;
  const [selectedValue, setSelectedValue] = useState("");

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };
  const name = legend?.toLowerCase().split(" ")[0];

  return (
    <div className="mt-4">
      <legend className="text-xs font-bold">{legend}</legend>
      {options &&
        options.map((option, index) => {
          return (
            <div
              key={index}
              className="ml-3 text-xs flex items-center font-medium"
            >
              <input
                type="checkbox"
                id={option}
                name={name}
                value={option}
                className="mr-2 text-xs"
                checked={selectedValue === option}
                onChange={(e) => handleCheckboxChange(e)}
              />

              <label htmlFor={name}>
                {option === "VRChat(Quest)" || option === "VRChat(PCVR)" ? (
                  <p className="flex gap-2 items-center">
                    {option}
                    <span
                      className={`h-3 w-3 rounded-full ${
                        option === "VRChat(PCVR)"
                          ? "ml-[2px] bg-cyan"
                          : "bg-parrotGreen"
                      }`}
                    ></span>
                  </p>
                ) : (
                  option
                )}
              </label>
            </div>
          );
        })}
    </div>
  );
};

export default GroupCheckbox;
