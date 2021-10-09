import React from 'react'
import './Testimonials.scss'

import {data} from  './TestimonialsData'

function Testimonial() {
    return (
        <div className='testimonials' >
              <h2 className='testimonials_h2'>Testimonials</h2>
            <div className="test_container">
              {data.map((d, index)=>{
                  return(
                   <div className="card">
                      <div className="top">
                        <i className='fas fa-angle-right'></i>
                        <img className='userImg' src={d.img} alt="" />
                        <i className='fab fa-youtube'></i>
                      </div>
                     <div className="center">
                      {d.desc}
                     </div>
                     <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                      </div>
                    </div>
                  )

                })}

           </div>                       
        </div>
    )
}

export default Testimonial
