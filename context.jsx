import React, { useContext, useState } from "react";
import { createContext } from "react"; // Ensure createContext is imported correctly
import { run } from "../Config/gemin"; // Adjust the path and export as necessary

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  console.log("hi");
  const [input,setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt,setPrevPrompt] = useState([]); 
  const [showResult, setShowResult] = useState(false);
  const [loading , setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  

  
  const onSent = async (prompt) => {  

    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    const response = await run(input); // Call the `run` function
    setResultData(response);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;


