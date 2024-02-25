import React from "react";
import Card from "../UI/Card"
import SmallHeading from "../UI/SmallHeading"
import MediumHeading from "../UI/MediumHeading"
import Skill from "../UI/Skill";
import { colors } from "../../style"





const Specialising = (props) => {
    const skills= [
        {
            skillName: 'HTML/CSS',
            desc: 'Hands on experience in Html/Css',
            value: '70',
            textColor: colors.primaryColor,
            pathColor: '#f2a154'
        },
        {
            skillName: 'JavaScript',
            desc: 'Hands on experience in JavaScript',
            value: '75',
            textColor: colors.primaryColor,
            pathColor: '#f9f871'
        },
        {
            skillName: 'ReactJS',
            desc: 'Hands on experience in ReactJS',
            value: '80',
            textColor: colors.primaryColor,
            pathColor: '#00af91'
        },
        {
            skillName: 'JQuery',
            desc: 'Hands on experience in JQuery',
            value: '60',
            textColor: colors.primaryColor,
            pathColor: '#845ec2'
        },
        {
            skillName: 'Bootstrap',
            desc: 'Hands on experience in Bootstrap',
            value: '70',
            textColor: colors.primaryColor,
            pathColor: '#F1E4C3'
        },
        {
            skillName: 'NodeJS',
            desc: 'Hands on experience in NodeJs',
            value: '60',
            textColor: colors.primaryColor,
            pathColor: '#f2a154'
        },
    
    ];
    return(
        <div className="container">
        <Card style={{ padding: "50px" }}>
        <SmallHeading text="What I do" />
        <MediumHeading text="Specialising In" /> 
        <div data-aos="fade-up" className="flexRow wrap justify-sb" style={{ padding: "30px" }}>
        {skills.map((skill, index) => (
            <Skill
            key={index}
           skillName= {skill.skillName}
           desc={skill.desc}
           value={skill.value}
           textColor={colors.primaryColor}
           pathColor={skill.pathColor} />
        ))}
           
        </div>
        </Card>
        </div>
    );
};

export default Specialising;