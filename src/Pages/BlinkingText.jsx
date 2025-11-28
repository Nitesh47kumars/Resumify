import React from "react";

export default function BlinkingText({
  text = "This project is still a work in progress — Some Components may create issues at the moment.",
  className = "",
}) {
  return (
    <p
      className={`blink-text font-semibold text-lg sm:text-xl text-center ${className}`}
    >
      {text}
    </p>
  );
}
