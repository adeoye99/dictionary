import React, { ReactElement } from 'react'

export interface Definition {
    definition : string;
    synonyms :   any[];
    antonyms :   any[];
    example ?:   string;
}
export interface Meaning {
    partOfSpeech: string;
    definitions:  Definition[];
    synonyms:     string[];
    antonyms:     string[];
} 


function Meaning({ partOfSpeech , definitions}: Meaning): ReactElement {
    console.log(definitions)
    return (
        <div>
             <div className='flex flex-row items-center mt-[40px] gap-8 '>
                <p className='font-bold text-xl'>{partOfSpeech}</p>
                <hr className='w-[100%]'/>
            </div>
            <div>
               <p>Meaning</p>
               <ul className='list-disc pl-[5%] gap-8'>
                {
                    definitions.map((item , key ) =>{
                        return(
                           <li>{item.definition}</li>
                           
                        )
                    })
                }
               
                  {/* <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
                  <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
                  <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li> */}
               </ul>
            </div>
        </div>
    )
}

export default Meaning
