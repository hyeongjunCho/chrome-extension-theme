import axios from "axios";
import React, { useEffect, useState } from "react";
import { pallete } from "../types/Palletes";
import ColorSuggestionView from "./ColorSuggestionView";

interface ComponentProps {
  pivotColor: string;
}

const fetchColorPallete = (color: string) => {
  return axios.get(
    `https://www.colourlovers.com/api/palettes?hex=${color.slice(
      1
    )}&format=json`
  );
};

function ColorSuggestion({ pivotColor }: ComponentProps) {
  const [prevColor, setPrevColor] = useState("");
  const [data, setData] = useState<pallete[]>([]);

  if (prevColor !== pivotColor) {
    if (pivotColor) {
      setPrevColor(pivotColor);
    }
  }
  
  useEffect(() => {
    fetchColorPallete(prevColor).then((response) => {
      setData(response.data);
    })
  }, [prevColor]);

  return <ColorSuggestionView palletes={data} />;
}

export default ColorSuggestion;
