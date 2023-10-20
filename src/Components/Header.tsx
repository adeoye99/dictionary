import React, { ReactElement , useState , useEffect } from 'react'
import  book from "../assets/iconoir_book.svg"

interface Props {
    
}

function Header({}: Props): ReactElement {

  const [enabled, setEnabled] = useState(false);
  const [darkMode , setDarkMode] = useState(false)
  useEffect(() => {
    // Check the user's preferred color scheme and set dark mode accordingly
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("is Here")
    // document.body.classList.toggle('dark', !darkMode);
  };
  // Function to handle toggle change
  const handleToggleChange = () => {
    // Update the state when the toggle is clicked
    console.log("is here")
    setEnabled(!enabled);
    console.log(enabled)
  };
    return (
        <div>
            <div className='grid grid-cols-2 w-[100%]  '>
                <div>
                <img
                  src = {book}
                  alt = 'BOOK'
                />

                    
                </div>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-row items-center gap-1 md:gap-2'>
                        <p className='text-sm font-extrabold	'>Sans Serif</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
                          <path d="M1 1L7 7L13 1" stroke="#A445ED" strokeWidth="1.5"/>
                        </svg> 
                      </div>

                      <div className='flex  items-center relative'>

                        <div className='grid grid-cols-2 absolute right-0  '>
                        <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={darkMode}
                        readOnly
                    />
                    <div
                        onClick={() => {
                          toggleDarkMode()
                            // setEnabled(!enabled);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                    ></div>
                 
                </label>
                        <div className= "flex  items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                             <path fillRule="evenodd" clipRule="evenodd" d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>


                        </div>
                      


                        </div>
                       



                      </div>
                    
                 
                </div>
               
            
            </div>
        </div>
    )
}

export default Header
