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
  width: 500px;
  gap: 40px;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const ColorPalleteDiv = styled.div`
  display: flex;
  width: 300px;
  height: 100px;
`;

const ColoredDiv = styled.div`
  background: ${(props) => props.color};
  flex: 1;
  height: 100px;
`;

interface ComponentProps {
  palletes: pallete[];
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
        chrome.tabs.executeScript(activeTabs[0].id as number, { code: "YOUR CODE HERE" });
      }
    );
  }

  if (!data) return <></>;
  if (data.length === 0) return <></>;]

  return (
    <FlexDiv>
      {data.map((item) => {
        return (
          <ColorPalleteContainerDiv>
            <ColorPalleteDiv>
              {item.colors.map((hex) => {
                return <ColoredDiv color={"#" + hex} />;
              })}
            </ColorPalleteDiv>
            <button onClick={() => selectPallete(item.colors)}>선택</button>
          </ColorPalleteContainerDiv>
        );
      })}
    </FlexDiv>
  );
}

export default ColorSuggestionView;
