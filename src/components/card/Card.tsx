import React from "react";
import classNames from "clsx";

import { Props } from "./types";

const Card: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { className = "", children, id } = props;
  return (
    <div
      key={id}
      className={classNames({
        [className]: true,
        "bg-white": true,
      })}
    >
      {children}
    </div>
  );
};

export default Card;
