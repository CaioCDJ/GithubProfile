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
            <div className="lang">
                {props.repoInfo.language}
            </div>
            
            <h4>{props.repoInfo.name}</h4>

            <div>
                {props.repoInfo.description}
            </div>

            <div className="topics">
                {props.repoInfo.topics.map(topic=>{
                    
                    const url = `https://github.com/topics/${topic}`
                    
                    return(
                        <a href={url}>
                            <div className="topic" title="github Topic">{topic}</div>
                        </a>
                    )
                })}
            </div>

            <div>
                <a href={props.repoInfo.html_url}>Github Page</a>
            </div>
        </div>
    )
    
}

export default Card;