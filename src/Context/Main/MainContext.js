import React from "react";

const MainContextProvider = ({ children }) => {
   const [theme , setTheme] = useState(false)
  
    return (
      <MainContext.Provider
        value={{
            theme,
            setTheme
   
        }}
      >
        {children}
      </MainContext.Provider>
    );
  };