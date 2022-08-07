import React, { useEffect, useState } from "react";
import githubApi from "../services/githubApi";
import jsonToArray from "../helpers/jsonToArray";

import "./Followers.css";

const Followers =  props =>{

    if(props.url === undefined || props.url == null){
        return ""
    }

    const [followers,setFollowers] = useState({});

    useEffect(()=>{

        githubApi(props.url)
            .then(followersJson=>{
                
                setFollowers(followersJson)
            },(e)=>{
                console.log(e.message)
            })

    },[]);

    return(

        <div className="followers flexCol">
           
           <h2>-- Followers --</h2>
           
           <div className="followersGrid">
            {
                jsonToArray(followers).map(follower=>{
                   return (
                    <a href={follower.html_url} key={follower.node_id}>
                        <img className="avatar" src={follower.avatar_url} 
                            title={follower.login}/>
                    </a>)
               })
           }
           </div>
        </div>
    )
}

export default Followers;