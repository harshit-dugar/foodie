import React, { useState } from "react";
import icon from "../../../Assets/Icons/smartphone.png"
import "./Navigationbar.css"
import { Link } from "react-router-dom";

function Navigation(){

    const [loggedIn,setLogin] = useState(false);

    return(
        <div className="navbar">
            <div className="navbar-in">
                <div className="left">
                    <img src={icon} alt="Icon Mobile" className="mobile-icon" />
                    <Link to="/getTheApp"> Get The App</Link>
                </div>
                <div className="right">
                    <div className="items">
                        <Link to="/addRestaurant">Add </Link>
                        {loggedIn ? (
                            <div className="profile">
                                <img />
                                <div className="">
                                </div>
                            </div>
                        ):(
                            <div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;