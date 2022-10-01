import { useCallback, useState } from "react";
import { ColorResult, SketchPicker } from "react-color";
import styled from "styled-components";

const RelativeDiv = styled.div`
  position: relative;
`;

const PopupBackgroundDiv = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 1;
`;

const ColorPickerContainer = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  margin-top: 8px;
  z-index: 2;
`;

const SwitchColorPickerDiv = styled.div<{ color: string }>`
  position: relative;
  width: 32px;
  height: 16px;
  background-color: ${(props) => props.color};
  box-shadow: inset 0 0 2px #edf0f6;
  border-radius: 2px;
`;

interface ComponentProps {
  pivotColor: string;
  setPivotColor: React.Dispatch<React.SetStateAction<string>>;
}

function ColorPicker({ pivotColor, setPivotColor }: ComponentProps) {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const open = useCallback(
    () => setShowColorPicker(true),
    [setShowColorPicker]
  );
  const close = useCallback(
    () => setShowColorPicker(false),
    [setShowColorPicker]
  );
  const handleChange = useCallback(
    (pick: ColorResult) => setPivotColor(pick.hex),
    [setPivotColor]
  );
  console.log(pivotColor);

  if (!showColorPicker) {
    return <SwitchColorPickerDiv color={pivotColor} onClick={open} />;
  }

  return (
    <RelativeDiv>
      <PopupBackgroundDiv onClick={close} />
      <SwitchColorPickerDiv color={pivotColor} />
      <ColorPickerContainer>
        <SketchPicker color={pivotColor} onChange={handleChange} />
      </ColorPickerContainer>
    </RelativeDiv>
  );
}

export default ColorPicker;
