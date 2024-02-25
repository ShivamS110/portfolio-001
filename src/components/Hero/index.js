 import React from "react";
 import me from "../../assets/Imags/rf.png"
 import Button from "../UI/Button"
 import "./style.css"

 const Hero = (props) => {
    return(
        <div className="container" style={{marginTop: "70px"}}>
        <div className="flexRow flexCol justify-sb align-center">
            <div data-aos="fade-right">
                <p className="uppercase bold-500 textColor ls-1 mtb-10">
                <span className="primaryColor">Hello,</span>I am Shivam Singh</p>
                <h1 className="textColor ls-1 mtb-10">Software Developer</h1>
                <p className="font-12 grey mtb-10">FullStack Developer using JS.</p>
                <div className="flexRow" style={{margin: "30px 0px"}}>
                <div>
                <Button label="Hire Me" />
                </div>
                <div className="mlr-10">
                <Button label="Download CV" inverse={true} />
                </div>
                </div>
            </div>
            <div data-aos="fade-left">
            <div className="meRightImgContainer">
                <img src={me} alt="" />
            </div>
            <div></div>
            </div>
            </div>
        </div>
    )
 }

 export default Hero