import React,{useState} from 'react'
import './JoinUs.scss'

const JoinUs = () => {
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
                             <h1 className='title_heading'>Join The  Amazing Team</h1>
                        </div>  
                        <form onSubmit={handleSubmit} action="#" className="form">
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">FULL NAME</label>
                                <input type="text" className="form__input" placeholder='Full name' id='name' required/>  
                            </div>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">CONTACT NUMBER</label>
                                <input type="text" className="form__input" placeholder='Contact number' id='name' required/> 
                            </div>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">GENDER</label>
                                <select className='form__input'>
                                    <option value="">Please select an option</option> 
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                </select>
                            </div>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">DATE OF BIRTH</label>
                                <input type="date" className="form__input" placeholder='Date of birth' id='name' required/> 
                            </div>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">AGE</label>
                                <input type="text" className="form__input" placeholder='Age' id='name' required/> 
                            </div>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">HEIGHT</label>
                                <input type="text" className="form__input" placeholder='Height' id='name' required/> 
                            </div>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">WEIGHT IN TERMS OF SIZE</label>
                                <input type="text" className="form__input" placeholder='Wieght in terms of size' id='name' required/> 
                            </div>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">T-SHIRT SIZE</label>
                                <select className='form__input'>
                                    <option value="">Please select an option</option> 
                                    <option value="">S</option>
                                    <option value="">M</option>   
                                    <option value="">L</option>
                                    <option value="">XL</option>
                                    <option value="">XXL</option>

                                </select>
                            </div>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">RELIGION</label>
                                <select className='form__input'>
                                    <option value="">Please select an option</option> 
                                    <option value="">Christian</option>
                                    <option value="">Muslim</option>   
                                    <option value="">Traditionalist</option>
                                    <option value="">Aethist</option>
                                    <option value="">Others</option>

                                </select>
                            </div>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">NATIONALITY</label>
                                <input type="text" className="form__input" placeholder='Nationality' id='name' required/> 
                            </div>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">REGION</label>
                                <input type="text" className="form__input" placeholder='Region' id='name' required/> 
                            </div>

                            <span className='form__span'>I agree to Labelle Agency's Terms and Privacy Policy</span>

                            
                            
                            <button className='form__btn' type='submit'>Register &rarr;</button>
                            {message && <span>Thanks, You'll here from me soon </span>}
                        </form>
            </div>
        </div>
    </>
  )
}

export default JoinUs
