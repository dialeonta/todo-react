import React from "react";
import { ReactComponent as CheckSVG } from '../../svg/check.svg';
import { ReactComponent as DeleteSVG } from '../../svg/delete.svg';
import "../../css/TodoIcon.css";

const IconTypes = {
  "check": (color) => <CheckSVG fill={color} className="Icon-svg" />,
  "delete": (color) => <DeleteSVG fill={color} className="Icon-svg" />
};

function TodoIcon({ type, color, onCompleted }) {
  return (
    <span onClick={onCompleted} className={`Icon Icon-svg Icon-${type}`}>
      {IconTypes[type](color)}
    </span>
  )
}

export { TodoIcon };