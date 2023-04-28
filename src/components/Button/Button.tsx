import React, { PropsWithChildren } from "react";
import classNames from "clsx";

import { type Props } from "./types";

const Button: React.FC<PropsWithChildren<Props>> = (props) => {
  const { className = "", children, type = "button", onClick, ...rest } = props;
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      className={classNames({
        [className]: true,
        "border-none font-medium": true,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
