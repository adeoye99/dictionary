import React, { ReactElement } from 'react'



export interface License {
    name: string;
    url:  string;
}
 interface Meaning {
    partOfSpeech: string;
    definitions:  string
    synonyms:     string[];
    antonyms:     string[];
}

export interface Definition{
    word  : string, 
    phonetic :  string, 
    meaning : Meaning[], 
    partOfSpeech: string

}
export interface Pokedex {
    word:       string;
    phonetic?:  string;
    meanings:   Meaning[];
    license:    License;
    sourceUrls: string[];
}


function Definitions({ word , phonetic, meaning, partOfSpeech}: Definition): ReactElement {

    console.log(meaning)
   
    return (
        <div className='mt-[60px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 '>
                <div>
                 <h1 className='text-6xl font-extrabold'>{word}</h1>
                 <p className='text-[#A445ED] mt-4'>{phonetic}</p>
                </div>
                <div className='relative flex items-center'>
                    <div className='absolute right-0'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
                         <circle opacity="0.25" cx="37.5" cy="37.5" r="37.5" fill="#A445ED"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M29 27V48L50 37.5L29 27Z" fill="#A445ED"/>
                       </svg>
                    </div>
                
                </div>
                
            </div>
             <div>
                {
                  meaning.map((item)=>{

                    return (
                        <>
                         <div className='flex flex-row items-center mt-[40px] gap-8 '>
                          <p className='font-bold text-xl'>{item.partOfSpeech}</p>
                          <hr className='w-[100%]'/>
                        </div>
                        <div>
                          <p>Meaning</p>
                          
                        
                          
                          <ul className='list-disc pl-[5%] gap-8'>
                             <li>{item.definitions}</li>
                          </ul>
                    </div>
                    </>
                    )

                  })
                }

            
            
            </div>
             <div className='flex gap-4 mt-[10px]'>
                <p>Synonyms</p>
                <p className='text-[#A445ED]'>electronic keyboard</p>
             </div>
             <div className='flex flex-row items-center mt-[40px] gap-8 '>
                <p className='font-bold text-xl'>verb</p>
                <hr className='w-[100%]'/>
            </div>
            <div>
               <p>Meaning</p>
               <ul className='list-disc pl-[5%] gap-8'>
                  <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
               </ul>
            </div>
            <hr className='mt-[5%]'/>
            <div className='flex flex-col md:flex-row gap-4 mt-[10px]'>
                <p>Source</p>
                <a className = "underline">https://en.wiktionary.org/wiki/keyboard</a>

            </div>
            
        </div>
    )
}

export default Definitions
