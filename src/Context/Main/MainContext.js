import React from "react";

const MainContextProvider = ({ children }) => {
   

   const [theme , setTheme] = useState(false)
   const [definitions , setDefinitions] = useState([])
   
   
   const getWord = async () => {
    setLoading(true)
    try{
    // setLoading(true)
      const response = await axios.get(API_URL  + search)

      console.log(response.data)
      setDefinitions(response.data)
      console.log(response.data[0].word)
     
        
    }catch(error){

      console.log(error)

    } finally{
      setLoading(false)
    }
   
  }

    return (
      <MainContext.Provider
        value={{
            theme,
            setTheme,
            getWord,
            definitions,
   
        }}
      >
        {children}
      </MainContext.Provider>
    );
  };