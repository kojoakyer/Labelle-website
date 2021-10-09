import React from 'react'

function Arrows({prevSlide,nextSlide}) {
    return (
        <div className='arrows'>
            <span className="prev" onClick={prevSlide}><i className='fas fa-angle-left'/></span>
            <span className="next" onClick={nextSlide}><i className='fas fa-angle-right'/></span>
        </div>
    )
}

export default Arrows
