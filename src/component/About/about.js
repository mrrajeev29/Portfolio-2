import react from "react";
import "./about.css"
const About=()=>{
    return(
        <div id="about" className="about">
            <h1>What I do</h1>
            <p>Greetings! I am a dedicated Mechanical Engineer with a fervor for innovation and sustainability. My professional journey has been focused on pushing the boundaries of traditional mechanical engineering, particularly in the exciting realm of Electric Vehicles (EVs). As a fervent advocate for clean energy and cutting-edge technology, I thrive on contributing to the transformative shift towards sustainable transportation solutions.
</p>
            <div className="divcoms">
                <img className="divImg" src="https://exploreengineering.ca/sites/default/files/2020-02/NEM_mechanical.jpg" />
                <img className="divImg" src="https://onlinecoursedownload.com/wp-content/uploads/2021/12/Fundamentals-of-Electric-Vehicle-Engineering.jpg" />
                <img className="divImg" src="https://cdn7.dissolve.com/p/D538_328_109/D538_328_109_1200.jpg" />
                <img className="divImg" src="https://blogs.sw.siemens.com/wp-content/uploads/sites/6/2021/02/Blue-wireframe-of-an-intelligent-electric-car-scaled.jpg" />
            </div>
        </div>
    )
}
export default About;