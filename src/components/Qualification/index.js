import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import me from "../../assets/Imags/new1.png"
import Button from "../UI/Button";
import Tile from "../UI/Tile";
import "./style.css";

const Qualification = (props) => {
    return(
        <div className="container" style={{padding: "50px 0"}}>
            <SmallHeading text="Qualifications" />
            <MediumHeading text={"My Education"} />
            <div className="flexRow flexCol align-center justify-sb">
                <div data-aos="fade-up-right">
                    <img src={me} alt="" />
                    <div 
                    className="flexRow"
                    style={{
                        background: "#fff",
                        padding: "10px 10px",
                        boxSizing: "border-box",
                        display: "flex",
                        justifyContent: "center",
                        borderRadius: "20px",
                    }}>
                    <div className="mlr-10">
                    <Button label="Hire Me" />
                    </div>
                    <div className="mlr-10">
                    <Button label="Download CV" inverse="true" />
                    </div>
                    </div>
                </div>
                <div>
                    <Tile 
                        title="AKTU"
                        mediumTitle="Computer Science & Engg."
                        desc="lorem ipsum text"
                    />
                    <Tile 
                        title="AKTU"
                        mediumTitle="Computer Science & Engg."
                        desc="lorem ipsum text"
                    />
                    <Tile 
                        title="AKTU"
                        mediumTitle="Computer Science & Engg."
                        desc="lorem ipsum text"
                    />
                </div>
            </div>
        </div>
    );
};

export default Qualification;