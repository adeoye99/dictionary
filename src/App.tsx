import React , {useState ,  ChangeEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import SearchInput from './Components/SearchInput';
import Definitions from './Components/Definitions';
import Nodefinitions from './Components/Nodefinitions';
import axios from 'axios';
import PuffLoader from "react-spinners/PuffLoader";




const API_URL : string = process.env.REACT_APP_BASEURL || ""

const definitions =
 []
 interface Definition {
  word: string;
  meanings: any[],
  phonetic : string,
  partOfSpeech : string
  // other properties if needed
}
function App() {
  const [search , setSearch] = useState("")
  const [loading , setLoading] = useState(false)
  const [definitions , setDefinitions] = useState<Definition[]>([])



  const handleSearchChange = (e : ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
  }

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

  console.log(definitions)
  console.log(definitions.length)

  return (
    <div>
       <div className='w-[100%] md:w-[50%] mx-auto  h-screen p-6'>
        <div>
         <Header/>
        </div>
        <SearchInput
          value = {search}
          onChange = {handleSearchChange}
          type = "type"
          name = "search"
          placeholder = "Search"
          // onBlur={getWord}
          onSubmit ={getWord}
        />
       
          {

            loading ?(
              <div className='text-center mx-auto'>

                   <PuffLoader className = "text-center mx-auto" color="#A445ED" />
              </div>
           
            )
                :
            <div>

            {

              definitions.length > 0 ? (
              <div>
               {
                definitions.map((item ,  index)=>{
                  return(
                    <Definitions
                     key = {index}
                     word = {item?.word}
                     phonetic = {item?.phonetic}
                     meaning = {item?.meanings}
                     partOfSpeech = {item?.partOfSpeech}
                    
                    />
                  ) 
                })
               }
               
                </div>   
              )   
              :(
               <Nodefinitions
               />
              )
             }
            </div>
          }
          



       
       
     
      

       </div> 
    </div> 
  );
}

export default App;
