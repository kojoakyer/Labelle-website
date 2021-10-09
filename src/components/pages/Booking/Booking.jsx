import React,{useState} from 'react'
import './Booking.scss'

const Booking = () => {
    const [message, setMessage] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        setMessage(true)

    }

  return (
    <>
        <div className="container">
            <div className=" wrapper ">
                        <div className="title">             
                             <h1 className='title_heading'>Book Us now</h1>
                        </div>  
                        <form onSubmit={handleSubmit} action="#" className="form">
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">FULL NAME</label>
                                <input type="text" className="form__input" placeholder='Full name' id='name' required/>  
                            </div>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">CONTACT NUMBER</label>
                                <input type="tel" className="form__input" placeholder='Contact number' id='name' required/> 
                            </div>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">SERVICE NEEDED</label>
                                <select className='form__input'>
                                    <option value="">Please select an option</option> 
                                    <option value="">Ushering</option>
                                    <option value="">Event Setup</option>
                                    <option value="">Product Activation</option>
                                    <option value="">Photo Shoot</option>
                                    <option value="">Commercials</option>
                                </select>
                            </div>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">REGION</label>
                                <input type="text" className="form__input" placeholder='Region' id='name' required/> 
                            </div>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">CITY</label>
                                <input type="text" className="form__input" placeholder='City' id='name' required/> 
                            </div>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">ADDRESS</label>
                                <input type="text" className="form__input" placeholder='Address' id='name' required/> 
                            </div>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">METHOD OF PAYMENT</label>
                                <select className='form__input'>
                                    <option value="">Please select an option</option> 
                                    <option value="">Bank Transfer</option>
                                    <option value="">Mobile Money</option>
                                </select> 
                            </div>

                            <span className='form__span'>I agree to Labelle Agency's Terms and Privacy Policy</span>
                            <button className='form__btn' type='submit'>Book Now &rarr;</button>
                            {message && <span>Thanks, You'll here from me soon </span>}
                        </form>
            </div>
        </div>
    </>
  )
}

export default Booking
