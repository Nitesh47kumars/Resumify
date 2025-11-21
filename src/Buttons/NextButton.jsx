import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useStep } from "../Context/StepContext";

const NextButton = ({ validate, nextRoute, stepNumber }) => {
  const navigate = useNavigate();
  const { setCompletedStep } = useStep();

  const handleNext = () => {
    // If a validate function exists, run it
    if (validate && !validate()) return;

    // Mark step as completed
    if (stepNumber) setCompletedStep(stepNumber);

    // Navigate to next page
    if (nextRoute) navigate(nextRoute);
  };

  return (
    <StyledWrapper>
      <div className="btn-conteiner">
        <button className="btn-content" onClick={handleNext}>
          <span className="text">NEXT</span>

          <span className="icon-arrow">
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 66 43"
              height="30px"
              width="30px"
            >
              <g
                fillRule="evenodd"
                fill="none"
                strokeWidth={1}
                stroke="none"
                id="arrow"
              >
                <path
                  fill="#9ee5fa"
                  d="M40.1543933,3.89485454 L43.9763149,0.139296592C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454Z"
                  id="arrow-icon-one"
                />
                <path
                  fill="#9ee5fa"
                  d="M20.1543933,3.89485454 L23.9763149,0.139296592C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454Z"
                  id="arrow-icon-two"
                />
                <path
                  fill="#9ee5fa"
                  d="M0.154393339,3.89485454 L3.97631488,0.139296592C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454Z"
                  id="arrow-icon-three"
                />
              </g>
            </svg>
          </span>
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-conteiner {
    display: flex;
    justify-content: center;

    --color-text: #ffffff;
    --color-background: #16a34a;        /* bg-green-600 */
    --color-background-hover: #15803d;  /* bg-green-700 */
    --color-outline: #9ee5fa80;
    --color-shadow: rgba(0, 0, 0, 0.4);
  }

  .btn-content {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 15px;
    gap: 6px;

    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: var(--color-text);

    background: var(--color-background);
    transition: 0.4s ease;
    border-radius: 100px;
    box-shadow: 0 4px 12px -2px var(--color-shadow);
  }

  .btn-content:hover,
  .btn-content:focus {
    background: var(--color-background-hover); /* green hover */
    transform: translateY(-1px);
    box-shadow: 0 6px 14px -2px var(--color-shadow);
  }

  .icon-arrow {
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.7);
    transition: 0.3s ease;
  }

  .btn-content:hover .icon-arrow {
    margin-right: 8px;
  }

  #arrow-icon-one,
  #arrow-icon-two,
  #arrow-icon-three {
    fill: #9ee5fa;
    transition: 0.4s ease;
  }

  @keyframes color_anim {
    0% { fill: white; }
    50% { fill: var(--color-background-hover); }
    100% { fill: #9ee5fa; }
  }

  .btn-content:hover #arrow-icon-three {
    animation: color_anim 1s infinite 0.2s;
  }

  .btn-content:hover #arrow-icon-one {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.6s;
  }

  .btn-content:hover #arrow-icon-two {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.4s;
  }
`;

export default NextButton;
