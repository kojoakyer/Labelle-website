import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'


const STYLES =['btn--outline', 'btn--primary','btn--secondary','blue']
const SIZES =['btn--large', 'btn--medium', 'btn--small']


function Button({buttonStyle,buttonSize,children,type,onClick,link}) {
    
    const CheckButtonStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const CheckButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]



    return (
        <div>

           <Link to={link} className='button-item'> 
                <button className={`btn ${CheckButtonStyles} ${CheckButtonSizes}`} onClick={onClick} type={type}>
                     {children}
                </button>
           </Link>
            
        </div>
    )
}

export default Button
