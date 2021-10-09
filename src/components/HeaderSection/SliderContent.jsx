import React from 'react'
import Button from '../button/Button'

function SliderContent ({current,ImageData}) {
    return (
        <section>
            {ImageData.map((slide, index)=>{
                return(
                    <div key={index} className={index === current ? 'slides active' : 'inactive'}>
                        <img  className='slide-img' src={slide.image} alt="" />
                        <h2 className='slide-title'>{slide.title}</h2>
                        <h3 className='slide-descr'>{slide.Descr}</h3>
                        {/* <Button className='slide-button' buttonStyle='btn--primary'>{slide.children}</Button> */}
                         <button className=' btns slide-button' to='/'>{slide.children}</button>  
                    </div>
                )
            })}
            
        </section> 
    )
}

export default  SliderContent
