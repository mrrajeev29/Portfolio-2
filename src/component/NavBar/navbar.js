import react,{useState} from "react"
import { FaBars } from 'react-icons/fa';
import {Link} from 'react-scroll'
import "./navbar.css"
const Navbar=()=>{
    const [showMenu,setShowMenu]=useState(false);
    return(
        <>
        <nav className="navbar">
            <img alt="logo" className="logo" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/7064f8105512449.5f7b1e51a8e7a.jpg" />
            <div className="Nav">
                <Link className="link" activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                <Link className="link" activeClass="active" to='about' spy={true} smooth={true} offset={-100} duration={500}>About</Link>
                <Link className="link" activeClass="active" to='project' spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
                <Link className="link" activeClass="active" to='client' spy={true} smooth={true} offset={-100} duration={500}>Clients</Link>
            </div>
            <Link activeClass="active1" to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className="glow-on-hover1" type="click">Contact me</button></Link>
            <FaBars className="icon"  onClick={()=>setShowMenu(!showMenu)} />
            <div className="PhoneBar" style={{display : showMenu?'flex':'none'}}>
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="PhoneMenu" onClick={()=>setShowMenu(!false)}>Home</Link>
                <Link activeClass="active" to='about' spy={true} smooth={true} offset={-100} duration={500} className="PhoneMenu" onClick={()=>setShowMenu(!false)}>About</Link>
                <Link activeClass="active" to='project' spy={true} smooth={true} offset={-100} duration={500} className="PhoneMenu" onClick={()=>setShowMenu(!false)}>Projects</Link>
                <Link activeClass="active" to='client' spy={true} smooth={true} offset={-100} duration={500} className="PhoneMenu" onClick={()=>setShowMenu(!false)}>Clients</Link>
            </div>
        </nav>
        </>
    )
}
export default Navbar;
