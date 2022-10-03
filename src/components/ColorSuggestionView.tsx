import { useState } from "react";
import { pallete } from "../types/Palletes";
import isDeepEqual from "fast-deep-equal/react";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

const ColorPalleteContainerDiv = styled.div`
  display: flex;
  gap: 16px;
  height: 120px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ColorPalleteDiv = styled.div`
  display: flex;
  width: 400px;
  height: 120px;
`;

const ColoredDiv = styled.div`
  background: ${(props) => props.color};
  flex: 1;
  height: 120px;
  position: relative;
`;

const ColorText = styled.p`
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  mix-blend-mode: difference;
`;

const ColorButton = styled.button`
  width: 60px;
  height: 34px;
  position: relative;
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  background: linear-gradient(
      to right,
      hsla(0, 0%, 82%, calc(0.06666666666666667 * 15)) calc(0px * 5 / 100),
      hsla(0, 0%, 82.23%, calc(0.06666666666666667 * 14)) calc(18.7px * 5 / 100),
      hsla(0, 0%, 82.87%, calc(0.06666666666666667 * 13)) calc(34.9px * 5 / 100),
      hsla(0, 0%, 83.87%, calc(0.06666666666666667 * 12)) calc(48.8px * 5 / 100),
      hsla(0, 0%, 85.16%, calc(0.06666666666666667 * 11)) calc(60.6px * 5 / 100),
      hsla(0, 0%, 86.67%, calc(0.06666666666666667 * 10)) calc(70.4px * 5 / 100),
      hsla(0, 0%, 88.34%, calc(0.06666666666666667 * 9)) calc(78.4px * 5 / 100),
      hsla(0, 0%, 90.1%, calc(0.06666666666666667 * 8)) calc(84.8px * 5 / 100),
      hsla(0, 0%, 91.9%, calc(0.06666666666666667 * 7)) calc(89.8px * 5 / 100),
      hsla(0, 0%, 93.66%, calc(0.06666666666666667 * 6)) calc(93.6px * 5 / 100),
      hsla(0, 0%, 95.33%, calc(0.06666666666666667 * 5)) calc(96.3px * 5 / 100),
      hsla(0, 0%, 96.84%, calc(0.06666666666666667 * 4)) calc(98.1px * 5 / 100),
      hsla(0, 0%, 98.13%, calc(0.06666666666666667 * 3)) calc(99.2px * 5 / 100),
      hsla(0, 0%, 99.13%, calc(0.06666666666666667 * 2)) calc(99.8px * 5 / 100),
      hsla(0, 0%, 99.77%, calc(0.06666666666666667 * 1)) calc(100px * 5 / 100),
      hsla(0, 0%, 100%, calc(0.06666666666666667 * 0)) calc(100px * 5 / 100),
      transparent calc(100px * 5 / 100)
    ),
    linear-gradient(
      to left,
      hsla(0, 0%, 82%, calc(0.06666666666666667 * 15)) calc(0px * 5 / 100),
      hsla(0, 0%, 82.23%, calc(0.06666666666666667 * 14)) calc(18.7px * 5 / 100),
      hsla(0, 0%, 82.87%, calc(0.06666666666666667 * 13)) calc(34.9px * 5 / 100),
      hsla(0, 0%, 83.87%, calc(0.06666666666666667 * 12)) calc(48.8px * 5 / 100),
      hsla(0, 0%, 85.16%, calc(0.06666666666666667 * 11)) calc(60.6px * 5 / 100),
      hsla(0, 0%, 86.67%, calc(0.06666666666666667 * 10)) calc(70.4px * 5 / 100),
      hsla(0, 0%, 88.34%, calc(0.06666666666666667 * 9)) calc(78.4px * 5 / 100),
      hsla(0, 0%, 90.1%, calc(0.06666666666666667 * 8)) calc(84.8px * 5 / 100),
      hsla(0, 0%, 91.9%, calc(0.06666666666666667 * 7)) calc(89.8px * 5 / 100),
      hsla(0, 0%, 93.66%, calc(0.06666666666666667 * 6)) calc(93.6px * 5 / 100),
      hsla(0, 0%, 95.33%, calc(0.06666666666666667 * 5)) calc(96.3px * 5 / 100),
      hsla(0, 0%, 96.84%, calc(0.06666666666666667 * 4)) calc(98.1px * 5 / 100),
      hsla(0, 0%, 98.13%, calc(0.06666666666666667 * 3)) calc(99.2px * 5 / 100),
      hsla(0, 0%, 99.13%, calc(0.06666666666666667 * 2)) calc(99.8px * 5 / 100),
      hsla(0, 0%, 99.77%, calc(0.06666666666666667 * 1)) calc(100px * 5 / 100),
      hsla(0, 0%, 100%, calc(0.06666666666666667 * 0)) calc(100px * 5 / 100),
      transparent calc(100px * 5 / 100)
    ),
    linear-gradient(
      to top,
      hsla(0, 0%, 82%, calc(0.06666666666666667 * 15)) calc(0px * 3 / 100),
      hsla(0, 0%, 82.23%, calc(0.06666666666666667 * 14)) calc(18.7px * 3 / 100),
      hsla(0, 0%, 82.87%, calc(0.06666666666666667 * 13)) calc(34.9px * 3 / 100),
      hsla(0, 0%, 83.87%, calc(0.06666666666666667 * 12)) calc(48.8px * 3 / 100),
      hsla(0, 0%, 85.16%, calc(0.06666666666666667 * 11)) calc(60.6px * 3 / 100),
      hsla(0, 0%, 86.67%, calc(0.06666666666666667 * 10)) calc(70.4px * 3 / 100),
      hsla(0, 0%, 88.34%, calc(0.06666666666666667 * 9)) calc(78.4px * 3 / 100),
      hsla(0, 0%, 90.1%, calc(0.06666666666666667 * 8)) calc(84.8px * 3 / 100),
      hsla(0, 0%, 91.9%, calc(0.06666666666666667 * 7)) calc(89.8px * 3 / 100),
      hsla(0, 0%, 93.66%, calc(0.06666666666666667 * 6)) calc(93.6px * 3 / 100),
      hsla(0, 0%, 95.33%, calc(0.06666666666666667 * 5)) calc(96.3px * 3 / 100),
      hsla(0, 0%, 96.84%, calc(0.06666666666666667 * 4)) calc(98.1px * 3 / 100),
      hsla(0, 0%, 98.13%, calc(0.06666666666666667 * 3)) calc(99.2px * 3 / 100),
      hsla(0, 0%, 99.13%, calc(0.06666666666666667 * 2)) calc(99.8px * 3 / 100),
      hsla(0, 0%, 99.77%, calc(0.06666666666666667 * 1)) calc(100px * 3 / 100),
      hsla(0, 0%, 100%, calc(0.06666666666666667 * 0)) calc(100px * 3 / 100),
      transparent calc(100px * 3 / 100)
    ),
    linear-gradient(
      to bottom,
      hsla(0, 0%, 82%, calc(0.06666666666666667 * 15)) calc(0px * 3 / 100),
      hsla(0, 0%, 82.23%, calc(0.06666666666666667 * 14)) calc(18.7px * 3 / 100),
      hsla(0, 0%, 82.87%, calc(0.06666666666666667 * 13)) calc(34.9px * 3 / 100),
      hsla(0, 0%, 83.87%, calc(0.06666666666666667 * 12)) calc(48.8px * 3 / 100),
      hsla(0, 0%, 85.16%, calc(0.06666666666666667 * 11)) calc(60.6px * 3 / 100),
      hsla(0, 0%, 86.67%, calc(0.06666666666666667 * 10)) calc(70.4px * 3 / 100),
      hsla(0, 0%, 88.34%, calc(0.06666666666666667 * 9)) calc(78.4px * 3 / 100),
      hsla(0, 0%, 90.1%, calc(0.06666666666666667 * 8)) calc(84.8px * 3 / 100),
      hsla(0, 0%, 91.9%, calc(0.06666666666666667 * 7)) calc(89.8px * 3 / 100),
      hsla(0, 0%, 93.66%, calc(0.06666666666666667 * 6)) calc(93.6px * 3 / 100),
      hsla(0, 0%, 95.33%, calc(0.06666666666666667 * 5)) calc(96.3px * 3 / 100),
      hsla(0, 0%, 96.84%, calc(0.06666666666666667 * 4)) calc(98.1px * 3 / 100),
      hsla(0, 0%, 98.13%, calc(0.06666666666666667 * 3)) calc(99.2px * 3 / 100),
      hsla(0, 0%, 99.13%, calc(0.06666666666666667 * 2)) calc(99.8px * 3 / 100),
      hsla(0, 0%, 99.77%, calc(0.06666666666666667 * 1)) calc(100px * 3 / 100),
      hsla(0, 0%, 100%, calc(0.06666666666666667 * 0)) calc(100px * 3 / 100),
      transparent calc(100px * 3 / 100)
    );
  &:hover {
    &::after {
      content: "선택";
      font-size: 16px;
      font-weight: 700;
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.85);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: black;
    }
  }
`;

const ColorButtonSVG = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(calc(50 / 192));
  transform-origin: center center;
`;

interface ComponentProps {
  palletes: pallete[];
}

function getPerceptualBrightness(color: string) {
  var r = parseInt(color.substring(0, 2), 16);
  var g = parseInt(color.substring(2, 4), 16);
  var b = parseInt(color.substring(4, 6), 16);

  return r * 2 + g * 3 + b;
}

function ColorSuggestionView({ palletes }: ComponentProps) {
  const [data, setData] = useState<pallete[]>([]);

  if (!isDeepEqual(data, palletes)) {
    setData(palletes);
  }

  const selectPallete = (colors: string[]) => {
    alert(colors);
    chrome.tabs.query(
      { active: true, currentWindow: true },
      function (activeTabs) {
        // WAY 1
        chrome.tabs.executeScript(activeTabs[0].id as number, {
          code: "YOUR CODE HERE",
        });
      }
    );
  };

  if (!data) return <></>;
  if (data.length === 0) return <></>;

  return (
    <FlexDiv>
      {data.filter((item) => item.colors?.length === 5).map((item) => {
        return (
          <ColorPalleteContainerDiv>
            <ColorPalleteDiv>
              {item.colors.map((hex) => {
                return (
                  <ColoredDiv color={"#" + hex}>
                    <ColorText>{"#" + hex}</ColorText>
                  </ColoredDiv>
                );
              })}
            </ColorPalleteDiv>
            <ColorButton onClick={() => selectPallete(item.colors)}>
              <ColorButtonSVG width="192" height="108">
                {(() => {
                  const colors = item.colors;
                  const sortedColorsDesc = colors
                    .sort((a, b) =>
                      getPerceptualBrightness(a) < getPerceptualBrightness(b)
                        ? 1
                        : -1
                    )
                    .map((color) => "#" + color);
                  return (
                    <>
                      <rect
                        x="0"
                        y="0"
                        width="192"
                        height="108"
                        fill={sortedColorsDesc[0]}
                      />
                      <rect
                        x="5"
                        y="5"
                        width="24"
                        height="4"
                        fill={sortedColorsDesc[4]}
                      />
                      <rect
                        x="25"
                        y="15"
                        width="65"
                        height="35"
                        fill={sortedColorsDesc[1]}
                      />
                      <rect
                        x="102"
                        y="15"
                        width="65"
                        height="35"
                        fill={sortedColorsDesc[2]}
                      />
                      <rect
                        x="25"
                        y="60"
                        width="65"
                        height="35"
                        fill={sortedColorsDesc[3]}
                      />
                      <rect
                        x="102"
                        y="60"
                        width="65"
                        height="35"
                        fill={sortedColorsDesc[4]}
                      />
                    </>
                  );
                })()}
              </ColorButtonSVG>
            </ColorButton>
          </ColorPalleteContainerDiv>
        );
      })}
    </FlexDiv>
  );
}

export default ColorSuggestionView;
