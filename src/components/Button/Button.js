import React from "react";
import { GiClick } from "react-icons/gi";
import "./Button.css";

function Button() {
  return (
    <>
      <button>
        Click me! <GiClick className="icon" />
      </button>
    </>
  );
}

export default Button;
