import React from "react";
import styled from "styled-components";

export default function Toggle({ value, onChange }) {
  return (
    <StyledWrapper>
      <label className="switch">
        <input 
          type="checkbox" 
          checked={value} 
          onChange={onChange} 
        />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .switch {
    font-size: 14px;
    position: relative;
    display: inline-block;
    width: 3em;
    height: 1.6em;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #b7f7b7;
    border-radius: 50px;
    transition: 0.3s ease;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.6em;
    width: 1.6em;
    background: white;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0,0,0,0.25);
    transition: 0.3s ease;
  }

  .switch input:checked + .slider {
    background: #22c55e;
  }

  .switch input:checked + .slider:before {
    transform: translateX(1.4em);
  }
`;
