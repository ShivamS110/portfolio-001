 import React from "react";
 import Card from "../UI/Card";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import latestproject from "../../assets/projects/project-001.png"
import "./style.css"
import Button from "../UI/Button";


 const LatestProjects = (props) => {
    return (
        <div className="container" style={{marginTop: "50px", marginBottom: "50px"}}
        data-aos="zoom-in-up"
        >
            <Card className="flexRow flexCol align-center justify-sb">
                <div style={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <SmallHeading text="Portfolios" />
                    <MediumHeading text="LATEST PROJECTS" />
                    <div className="mtb-10 flexRow" style={{justifyContent: 'center'}}>
                    <Button label="Portfolios" />
                    </div>
                </div>
                <div className="projectImgContainer">
                    <img src={latestproject} alt="" />
                </div>
            </Card>
        </div>
    );
 };

 export default LatestProjects;