import React from "react";

export default function BlinkingText({
  text = "This project is still a work in progress — More than 1 Page Resume/CV create Reading Issues.",
  className = "",
}) {
  return (
    <p
      className={`blink-text font-semibold text-sm sm:text-[17px] text-center ${className}`}
    >
      {text}
    </p>
  );
}
