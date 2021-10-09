import React,{useEffect, useState} from 'react'
import Arrows from './Arrows'
import Dots from './Dots'
import { imageData } from './ImageData'
import SliderContent from './SliderContent'
import './Slider.css'
import Button from '../button/Button'




const length = imageData.length-1

function Slider() {

    const [current, setCurrent] = useState(0)

    function nextSlide(){
        setCurrent(current===length-1 ? 0 :current+1)
    }

    function prevSlide(){
        setCurrent(current === 0 ? length - 1 : current-1)
    }

    function onclick(current){
        setCurrent(current)
    }

    useEffect(()=>{
        const interval =setInterval(()=>{
            setCurrent(current===length?0 : current+1)
        },3000)
        return ()=>clearInterval(interval);
    },[current])


    return (
        <div className='slider-container'>
            <SliderContent current={current} ImageData={imageData}/>
            <Arrows prevSlide={prevSlide} nextSlide={nextSlide}/>
            <Dots current={current} ImageData={imageData} onclick={onclick}/>
        </div>
    )
}

export default Slider
