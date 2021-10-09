import React from 'react'
import Footer from '../../Footer/Footer'
import Slider from '../../HeaderSection/Slider'
import HeroSection from '../../HeroSection/HeroSection'
import HerosectionTitle from '../../HeroSection/HerosectionTitle'
import Testimonial from '../../Testimonials/Testimonial'
import {homeObjFour, homeObjOne,homeObjThree,homeObjTwo} from './Data'

function Home() {
    return (
        <div>
            <Slider/>
            <HerosectionTitle/>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree}/>
            <HeroSection {...homeObjFour}/>
            <Testimonial/>
        </div>
    )
}

export default Home
