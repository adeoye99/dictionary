import React, { ReactElement } from 'react'

interface Props {
    
}

function Definitions({}: Props): ReactElement {
    return (
        <div className='mt-[60px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 '>
                <div>
                 <h1 className='text-6xl font-extrabold'>Keyboard</h1>
                 <p className='text-[#A445ED] mt-4'>/ˈkiːbɔːd/</p>
                </div>
                <div className='relative flex items-center'>
                    <div className='absolute right-0'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
                         <circle opacity="0.25" cx="37.5" cy="37.5" r="37.5" fill="#A445ED"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M29 27V48L50 37.5L29 27Z" fill="#A445ED"/>
                       </svg>
                    </div>
                
                </div>
                
            </div>

            <div className='flex flex-row items-center mt-[40px] gap-8 '>
                <p className='font-bold text-xl'>noun</p>
                <hr className='w-[100%]'/>
            </div>
            <div>
               <p>Meaning</p>
               <ul className='list-disc pl-[5%] gap-8'>
                  <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
                  <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
                  <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
               </ul>
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
