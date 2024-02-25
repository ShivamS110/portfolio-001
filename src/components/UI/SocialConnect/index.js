import React from "react";

import me from "../../../assets/social-icons/facebook.png"
import the from "../../../assets/social-icons/instagram.png"
import he from "../../../assets/social-icons/linkedin.png"
import jk from "../../../assets/social-icons/Twitter.png"
import "./style.css"


const SocialConnect = (props) => {
    return(
        <div className="socialConnect" style={props.style}>
        <span className="textColor font-14 mlr-10">Follow me on:</span>
            <a className="socialLink" href="#">
                <img src={me} alt="" />  
            </a>
            <a className="socialLink" href="#">
                <img src={the} alt="" />  
            </a>
            <a className="socialLink" href="#">
                <img src={he} alt="" />  
            </a>

            <a className="socialLink" href="#">
                <img src={jk} alt="" />  
            </a>
        </div>
    );
};

export default SocialConnect;