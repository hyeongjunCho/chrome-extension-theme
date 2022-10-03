import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
// import { DOMMessage, DOMMessageResponse } from "./types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ColorSuggestion from "./components/ColorSuggestion";
import { FontBungeeSpice, FontPressStart2P } from "./fonts";
import Loading from "./components/Loading";
import { loadingHandler } from "./index";
import A from "./components/A";

function App() {
  const queryClient = new QueryClient();
  const [pivotColor, setPivotColor] = useState("#FFFFFF");
  const [loading, setLoading] = useState(loadingHandler.loading);

  const changeLoadingState = useCallback(() => {
    setLoading(loadingHandler.loading);
  }, []);

  useEffect(() => {
    window.addEventListener("loadingupdate", changeLoadingState);

    return () => {
      window.removeEventListener("loadingupdate", changeLoadingState);
    }
  }, [changeLoadingState]);

  return (
    <QueryClientProvider client={queryClient}>
      <A />
      <FontBungeeSpice />
      <FontPressStart2P />
      <div className="App">
        <h1>Customize theme for current site!</h1>
        <ColorPicker pivotColor={pivotColor} setPivotColor={setPivotColor} />
        <ColorSuggestion pivotColor={pivotColor} />
        <Loading />
      </div>
    </QueryClientProvider>
  );
}

export default App;
