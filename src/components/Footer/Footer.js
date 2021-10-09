import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-left">
                <div className="footer-logo">
                    <Link className='footer-logo-link'><img className='social-logo' src="images/laBelle-LOGO.png" alt="" /></Link>
                </div>
                <div className="description">
                Labelle Events and a ushering Agency is a company dedicated to finding cutting-edge solutions and providing great services.
                </div>
                <small className="website-rights">
                © 2021 Labelle Ushering Agency | All right reserved.
                </small>

            </div>
            <div className="footer-right">
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-item">
                             <h2>Company</h2>
                             <Link  to='/'>How it works</Link>
                             <Link   to='/'>Testimonials</Link>
                             <Link   to='/'>Carrers</Link>
                             <Link   to='/'>Investor </Link>
                             <Link   to='/'>Terms of service</Link>
                        </div>
                        <div className="footer-link-item">
                             <h2>Services</h2>
                             <Link   to='/'>How it works</Link>
                             <Link   to='/'>Testimonials</Link>
                             <Link   to='/'>Carrers</Link>
                             <Link   to='/'>Investor </Link>
                             <Link   to='/'>Terms of service</Link>
                        </div>
                    </div>
                    <div className="footer-link-wrapper">
                        <div className="footer-link-item">
                             <h2>Support</h2>
                             <Link   to='/'>How it works</Link>
                             <Link   to='/'>Testimonials</Link>
                             <Link   to='/'>Carrers</Link>
                             <Link   to='/'>Investor </Link>
                             <Link   to='/'>Terms of service</Link>
                        </div>
                        <div className="footer-link-item">
                             <h2>Contact Us</h2>
                             <Link  className='footer-link' to='/'><i className="far icon-c fa-envelope"/>labelleeventagency@gmail.com</Link>
                             <Link  className='footer-link' to='/'><i className="fas icon-c fa-phone-alt"/>  0558131754</Link>
                             <Link  className='footer-link' to='/'><i className="fas icon-c fa-map-marker-alt"/>  Accra, Ghana</Link>
                             {/* <Link  className='footer-link' to='/'>Investor </Link>
                             <Link  className='footer-link' to='/'>Terms of service</Link> */}
                        </div>
                    </div>
                </div>
                <section className="social-media">
                    <div className="social-media-wrap">
                        <div className="terms-cond">
                            <Link className='privacy-terms'>Terms and Conditions</Link>
                        </div>
                        <div className="privcy-policy">
                            <Link className='privacy-terms'>Privacy Policy</Link>
                        </div>
                        <small className="website-rights2">
                             © 2021 Labelle Ushering Agency | All right reserved.
                        </small>
                        <div className="social-icons">
                            <Link className="social-icon-link">
                                 <i className="fab fa-facebook-f"/>
                            </Link>
                            <Link className="social-icon-link">
                                 <i className="fab fa-twitter"/>
                            </Link>
                            <Link className="social-icon-link">
                                 <i className="fab fa-instagram"/>
                            </Link>
                            <Link className="social-icon-link">
                                 <i className="fab fa-youtube"/>
                            </Link>

                        </div>
                    </div>

                </section>
            </div>

            
        </div>
    )
}

export default Footer
