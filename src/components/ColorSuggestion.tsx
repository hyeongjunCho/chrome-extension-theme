import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { pallete } from "../types/Palletes";
import ColorSuggestionView from "./ColorSuggestionView";
import Loading from "./Loading";

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
  const [loading, setLoading] = useState(true);

  if (prevColor !== pivotColor) {
    if (pivotColor) {
      setPrevColor(pivotColor);
    }
  }
  
  useEffect(() => {
    setLoading(true);
    fetchColorPallete(prevColor).then((response) => {
      setLoading(false);
      setData(response.data);
    })
  }, [prevColor]);

  if (loading) return <Loading />

  return <ColorSuggestionView palletes={data} />;
}

export default ColorSuggestion;
