import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Button from '../button/Button'
import './Navbar.css'




function Navbar() {

    const [click, setClick] = useState(false)
    const [button, setButton]= useState(true);


    function showButton (){
        if(window.innerWidth <= 960){
          setButton(false)
        }else{
          setButton(true)
        }
    }
  
    useEffect(()=>{
        showButton();
    },[])

    window.addEventListener('resize', showButton)

    function handleClick(){
        setClick(!click)
    }

    function closeMobileMenu () {
        setClick(false)
    }

    return (
        <>
            <div className="navbar">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <div className="nav-left">
                    <div className="nav-logo">
                       <img className='photo' src="images/laBelle-LOGO2.png" alt="" />
                    </div>
                </div>
                <div className="nav-center">
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/' className='nav-links'>Home</Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/services' className='nav-links'>Services</Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/booking' className='nav-links'>Book Us</Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/gallery'className='nav-links'>Gallery</Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}> 
                            <Link to='/about' className='nav-links'>About Us</Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link className='nav-links-mobile' to='/joinUs'>Join Us</Link>
                        </li>
                    </ul>
                </div>
               
                <div className="nav-right">
                    {button && <Button buttonStyle='btn--secondary' buttonSize='btn--large' link='/joinUs'>JOIN US</Button>}
                </div>
            </div>  
        </>
    )
}

export default Navbar
