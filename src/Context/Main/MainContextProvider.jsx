import { createContext } from "react";

const MainContext = createContext({
    theme: false,
   setTheme: () => {},
   getWord: () => {},
   definitions : ""
   
  

});

export default MainContext;