import React from "react";
import "./profileInfo.css"

export default function(props){

    if(props.profile == undefined || props.profile == "") return ""


    return (

        <div className="fullScreen profile">
            
            <div className="left flexCol">
                <img className="profilePic" src={props.profile.avatar_url} />
                <h3>{props.profile.login}</h3>
                <div>{props.profile.bio}</div>
            </div>
            
            <div className="right">

                <ul>
                    <li><strong>Name: </strong> {props.profile.name}</li>
                    <li><strong>Site/Blog: </strong> <a href={props.profile.blog}>click me</a></li>
                    <li><strong>Created_at: </strong> {props.profile.created_at} </li>
                </ul>
                <ul>
                    <li><strong>E-mail: </strong> {props.profile.email}</li>
                    <li><strong>Location: </strong> {props.profile.location}</li>
                    <li className="follow">
                        <div><strong>Followers:</strong>  {props.profile.followers}</div>    
                        <div><strong> Following: </strong> {props.profile.following}</div>    
                    </li>
                </ul>
            </div>

        </div>
    )
}