import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import SearchInput from './Components/SearchInput';
import Definitions from './Components/Definitions';
import Nodefinitions from './Components/Nodefinitions';
import axios from 'axios';


const API_URL : string = process.env.REACT_APP_BASEURL || ""

const definitions = []

function App() {
  const [search , setSearch] = useState("")
  const handleSearchChange = (e : any) =>{
      setSearch(e.target.value)
  }

  const getWord = async () => {
    try{
      const response = await axios.get(API_URL  + {search})
      console.log(response)

    }catch(error){
      console.log(error)
    } 
   
  }
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
          onBlur={getWord}
        />
        {
          definitions.length > 0 ?
          <Definitions/>
          :
          <Nodefinitions/>


        }
      

       </div> 
    </div> 
  );
}

export default App;
