import React from 'react'

function Dots({current,onclick,ImageData}) {
    return (
        <div className='all-dots'>
            {ImageData.map((slide, index)=>{
                return(
                <span key={index} className={`${ current=== index ? 'dot active-dot' : 'dot'} `} onClick={() => onclick(index)}></span>
                )
            })}
        </div>
    )
}

export default Dots
