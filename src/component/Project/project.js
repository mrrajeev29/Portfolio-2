import react from "react";
import "./project.css"
const Project=()=>{
    return(
        <>
        <div className="project">
        <h1 className="title">Some of my Projects.</h1>
        <p className="desc">Throughout my professional journey, I have had the privilege of working on diverse projects that align with my specialization in Electric Vehicles.My experiences have honed my skills in the dynamic field of sustainable transportation.
</p>
        <div className="divPros">
            <div className="divPro">
                <h1 className="pName">Innovage    2022 -1</h1>
                <p className="pdesc"> Raptee Ev Bike project</p>
            </div>
            <div className="divPro">
                <h1 className="pName">Prototype Design and development </h1>
                <p className="pdesc">Centre for cyber physical systems</p>
            </div>
            <div className="divPro">
                <h1 className="pName">Underwater robotics </h1>
                <p className="pdesc">Underwater robotics project Shristi Robotics</p>
            </div>
            <div className="divPro">
                <h1 className="pName">Portfolio</h1>
                <p className="pdesc">Frontend project for Portfolio</p>
            </div>
        </div>
        </div>
        </>
    )
}
export default Project;