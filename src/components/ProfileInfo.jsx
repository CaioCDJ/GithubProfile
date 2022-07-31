import React from "react";
import "./profileInfo.css"

export default function(props){

    return (
        <div className="fullScreen info">
            <div>
                <ul>
                    <li>Nome: <p>{props.profile.name}</p></li>
                    <li>Email: <p>{props.profile.email}</p></li>
                    <li>Bio: <p>{props.profile.bio}</p></li>
                </ul>
            </div>

            <div>
            
            </div>
        </div>
    )
}