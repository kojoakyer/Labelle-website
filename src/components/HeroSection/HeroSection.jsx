import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../button/Button'
import './HeroSection.css'


function HeroSection({lightBg,topLine,lightText,lightTextDesc,headLine,description,buttonLabel,img1,img2,alt,imgStart}) {

    // const [button, setButton]= useState(true);


    // function showButton (){
    //     if(window.innerWidth <= 960){
    //       setButton(false)
    //     }else{
    //       setButton(true)
    //     }
    // }
  
    // useEffect(()=>{
    //     showButton();
    // },[])

    // window.addEventListener('resize', showButton)



    return (
        <div>

          <div className={lightBg ? 'home__hero-section':'home__hero-section darkBg'}>
              <div className="container">
                    <div className="row home__hero-row" >
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">
                                    {topLine}
                                </div>
                                <h1 className={lightText?'heading':'heading dark'}>{headLine}</h1>
                               <p className={lightTextDesc?'home__hero-subtitle':'home__hero-subtitle dark'}>{description}</p>
                                <Link to='/sign-up'>
                                    <Button buttonStyle='blue' link='/' buttonSize='btn--large'>{buttonLabel} &rarr;</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                          <div className="home__hero_img-wrapper">
                            <img src={img1} alt={alt} className='home__hero-img __p1' />
                            <img src={img2} alt={alt} className='home__hero-img __p2' />
                           </div>
                        </div>
                    </div>
              </div>
          </div>  
        </div>    )
}

export default HeroSection
