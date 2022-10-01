import React, { useState } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
// import { DOMMessage, DOMMessageResponse } from "./types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ColorSuggestion from "./components/ColorSuggestion";

function App() {
  const queryClient = new QueryClient();
  const [pivotColor, setPivotColor] = useState("#FFFFFF");
  // const [title, setTitle] = useState("");
  // const [headlines, setHeadlines] = useState<string[]>([]);

  // React.useEffect(() => {
  //   /**
  //    * We can't use "chrome.runtime.sendMessage" for sending messages from React.
  //    * For sending messages from React we need to specify which tab to send it to.
  //    */
  //   chrome.tabs &&
  //     chrome.tabs.query(
  //       {
  //         active: true,
  //         currentWindow: true,
  //       },
  //       (tabs) => {
  //         /**
  //          * Sends a single message to the content script(s) in the specified tab,
  //          * with an optional callback to run when a response is sent back.
  //          *
  //          * The runtime.onMessage event is fired in each content script running
  //          * in the specified tab for the current extension.
  //          */
  //         chrome.tabs.sendMessage(
  //           tabs[0].id || 0,
  //           { type: "GET_DOM" } as DOMMessage,
  //           (response: DOMMessageResponse) => {
  //             setTitle(response.title);
  //             setHeadlines(response.headlines);
  //           }
  //         );
  //       }
  //     );
  // });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Customize theme for current site!</h1>
        <ColorPicker pivotColor={pivotColor} setPivotColor={setPivotColor} />
        <ColorSuggestion pivotColor={pivotColor} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
