import React, { ReactElement } from 'react'

interface Props {
    
}

function Nodefinitions({}: Props): ReactElement {
    return (
        <div className='text-center pt-[15%]'>
            <p className='text-xl '>😕</p>
            <p className='font-bold mt-[10px]'>No Definitions Found</p>
            <p className='mt-[10px]'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
        </div>
    )
}

export default Nodefinitions
