import react, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contacts.css";
const Contacts=()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qpcincd', 'template_m5iaw7k', form.current, 'shPZ7P0S5jRmvylW9')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!')

          }, (error) => {
              console.log(error.text);
          });
    }
    return(
        <>
        <form ref={form}  id="contact" onSubmit={sendEmail}>
            <h1 className="mc">Contact Me</h1>
            <input name="your_name" className="input" type="text" placeholder="Enter Your Name" required/>
            <input name="your_email" className="input"  type="email" placeholder="Enter Your Email" required/>
            <input name="message" className="inputArea"  placeholder="Your Message" required/>

            <center><button className="glow-on-hover2" value='Send' type="submit">Submit</button></center><br/>
        </form>

        <div className="footLink">
            <center>
            <ul> 
                <li>
                <a target="_blank" href="https://www.facebook.com/sourya.biswas.982?sfnsn=wiwspwa&mibextid=RUbZ1f">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fa fa-facebook"></span>
                </a> 
                </li>
                <li>
                <a target="_blank"  href="https://github.com/SouryaBiswas02">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fa fa-github"></span>
                </a> 
                </li>
                <li>
                <a target="_blank"  href="https://twitter.com/SouryaBiswas03">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fa fa-twitter"></span>
                </a> 
                </li>
                <li>
                <a target="_blank"  href="https://www.instagram.com/hey.sourya?igsh=MWRhdDZrY2J3Zm51Ng==">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fa fa-instagram"></span>
                </a> 
                </li>
                <li>
                <a target="_blank"  href="https://www.linkedin.com/in/sourya-biswas-478050200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fa fa-linkedin"></span>
                </a> 
                </li>
            </ul>  
            </center>
        </div> 
        </>
    )
}
export default Contacts;