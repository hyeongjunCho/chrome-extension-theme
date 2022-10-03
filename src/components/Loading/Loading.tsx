import { useEffect, useState } from "react";
import styled from "styled-components";
import { m, s, hours, minutes, seconds, milliseconds } from "./keyframes";

const LoadingBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  z-index: 99;
`;

const LoadingBody = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  background: #f6f5ed;
`;

const LoadingSVG = styled.svg`
  position: absolute;
  z-index: -1;
`;

const LoadingPath = styled.div`
  width: 300px;
  height: 150px;
  clip-path: url(#svgPath);
  --c1: #6666cc;
  --c2: #abbaff;

  --_p: 93% 83.5% at;
  --_g1: radial-gradient(var(--_p) bottom, var(--c1) 79.5%, #0000 80%) no-repeat;
  --_g2: radial-gradient(var(--_p) top, #0000 79.5%, var(--c1) 80%) no-repeat;
  --_g3: radial-gradient(var(--_p) bottom, var(--c2) 79.5%, #0000 80%) no-repeat;
  --_g4: radial-gradient(var(--_p) top, #0000 79.5%, var(--c2) 80%) no-repeat;
  background: var(--_g1), var(--_g2), var(--_g1), var(--_g2), var(--_g3),
    var(--_g4), var(--_g3), var(--_g4);
  animation: ${s} 4s infinite alternate, ${m} 6s infinite linear;
  position: relative;
`;

const LoadingPathBackground = styled.div`
  width: 100%;
  height: 100%;
  background: #7d82dd55;
`;

const TimeViewer = styled.p`
  text-align: center;
  font-size: 15px;
  --hours: "00";
  --minutes: "00";
  --seconds: "00";
  --milliseconds: "000";
  label {
    width: 20px;
    text-align: center;
  }
  animation: ${minutes} calc(60s * 60) linear infinite, ${hours} calc(60s * calc(60 * 24)) linear infinite, ${seconds} calc(60s) linear infinite, ${milliseconds} calc(1s) linear infinite;
`;

const Hour = styled.label`
  &::after {
    content: var(--hours);
  }
`;

const Minute = styled.label`
  &::after {
    content: var(--minutes);
  }
`;

const Second = styled.label`
  &::after {
    content: var(--seconds);
  }
`;

const Millisecond = styled.label`
  &::after {
    content: var(--milliseconds);
  }
`;

export default function Loading() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime((prev) => {
        prev += 1;
        return prev;
      });
    }, 1);
  }, []);

  return (
    <LoadingBackground>
      <LoadingBody>
        <LoadingSVG
          width="100px"
          height="100px"
          className="loading-body2__shape"
        >
          <g transform="translate(50,50)">
            <clipPath id="svgPath">
              <text
                x="50%"
                y="50%"
                alignment-baseline="middle"
                text-anchor="middle"
                fontSize="35"
                fontFamily="'Bungee Spice', cursive"
              >
                <tspan x="150%" dy="-10">
                  #namoo
                </tspan>
                <tspan x="150%" dy="50">
                  ♥
                </tspan>
                <tspan x="150%" dy="50">
                  #goyujun
                </tspan>
              </text>
            </clipPath>
          </g>
        </LoadingSVG>
        <LoadingPath>
          <LoadingPathBackground />
        </LoadingPath>
        <TimeViewer>
          <Hour></Hour>:<Minute></Minute>:<Second></Second>.
          <Millisecond></Millisecond>
        </TimeViewer>
        {Math.floor(time / 1000 / 60 / 60) % 24}:{Math.floor(time / 1000 / 60) % 60}:{Math.floor(time / 1000) % 60}.{time % 1000}
      </LoadingBody>
    </LoadingBackground>
  );
}
