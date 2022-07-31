import React from "react";
import "./card.css"

const Card = props =>{

    /* 
        nome
        description
        language
        tags
        watchers
        btns - githubPage
    */

    return (
        <div className="card" key={props.repoInfo.id}>
            <div>Language/watchers</div>
            <h4>{props.repoInfo.name}</h4>
            <div>
                {props.repoInfo.description}
            </div>
            <div>
                <a href={props.repoInfo.html_url}>Github Page</a>
            </div>
        </div>
    )
    
}

export default Card;