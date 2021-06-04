import React from 'react'
import './contact.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import emailjs from "emailjs-com"

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_portfolio', e.target, 'user_sHSBwowoKCPwM0O644yPv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }
    return (
        <div>
        <section id="contact">
        <h1 className="section-header">CONTACT</h1>
        <div className="contact-wrapper">    
            <div className="form"> 
            
            <form className="contact-form" onSubmit={sendEmail} >
        <input
          className="contact-form-text"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="contact-form-text"
          type="Email"
          placeholder="Email"
          name="email"
        />
        <input className="contact-form-text"
          placeholder="Subject"
          name="subject"
        />
        <textarea
          className="contact-form-text"
          placeholder="Message"
          name="message"
        ></textarea>
        <input className="contact-form-btn" type="submit" value="send"  />
      </form>
     
        </div> 
        <div className="direct-contact-container">
        <ul className="contact-list">
            <li className="list-item"><LocationOnIcon/><span className="contact-text place">Tirana, Albania</span></li>
            <li className="list-item"><CallIcon/><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(355)6926-91645</a></span></li>
            <li className="list-item"><EmailIcon/><span className="contact-text gmail"><a href="/"  title="Send me an email">fjoreloserjani@gmail.com</a></span></li>
        </ul>

        <hr/>
        <ul className="social-media-list">
            <GitHubIcon onClick={()=>window.open('https://github.com/fioreloss','_blank')} style={{ fontSize: 50, paddingRight:"10px"}} />
            <InstagramIcon  style={{ fontSize: 50, paddingRight:"10px" }} onClick={()=>window.open('https://www.instagram.com/fiorelo.serjani/','_blank')}/>
            <FacebookIcon  style={{ fontSize: 50, paddingRight:"10px" }} onClick={()=>window.open('https://www.facebook.com/fiorelo.serjani/','_blank')}/>
            <LinkedInIcon  style={{ fontSize: 50 }} onClick={()=>window.open('www.linkedin.com/in/fjorelo-serjani','_blank')}/>
            
        </ul>
        <hr/>

        <div className="copyright">&copy; Fiorelo Serjani</div>

        </div>
    </div>
    </section>  
        </div>
        
    )
}
