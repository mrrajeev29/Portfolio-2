import React from "react";
import { Link } from "react-scroll";
import "./intro.css"
const Intro=()=>{
    return(
        <div id="intro" className="block">
        <h3 className="design1">
            <span className="hello">Hello,</span><br/>
            <span className="name">I'm Sourya Biswas</span>
        </h3>
        <h1 className="design2">
            <span>I am a Mechanical Engineer</span><br/>
            <span> with expertise in Electrical Vehicle</span>
            <span> in creating visual and user-friendly websites.</span>
        </h1>
        <br/>
        <div className="infobtn">
            <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className="glow-on-hover" type="button"><i class="fa fa-briefcase"></i>&ensp;START A PROJECT</button></Link>&emsp;
            <a target="_blank" href="https://docs.google.com/document/d/1oes7XN6R0cnJZ4ChQD3m99A9eNsiei0z/edit?usp=drive_link&ouid=111434711665647635297&rtpof=true&sd=true"><button className="glow-on-hover" type="button"><i class="fa fa-file-pdf-o"></i>&ensp;RESUME</button></a>
            
        </div>
        
        </div>
    )
}
export default Intro;