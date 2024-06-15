// "use client";
// import React, { createContext, useContext, useState } from "react";


// export interface UIContextType {
//   isButtonActive: boolean;
//   toggleButton: () => void;
// }


// // Create the context with the defined interface
// export const UIContext = createContext<UIContextType | undefined>(undefined);


// // Create a provider component
// export const UIProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [isButtonActive, setIsButtonActive] = useState(false);


//   const toggleButton = () => {
//     setIsButtonActive(!isButtonActive);
//   };


//   const value = { isButtonActive, toggleButton };


//   return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
// };


// export default UIContext;


// export const useUIContext = () => useContext(UIContext);