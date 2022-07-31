import React, { useEffect, useState } from "react";
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import githubApi from "../services/githubApi";

import "./Main.css"

export default function Main(){


    const [profile,setProfile] = useState({});

    useEffect(()=>{

        githubApi("https://api.github.com/users/CaioCDJ")
        .then(response =>{
            setProfile(response);
        })
    },[])

    return(
        <>
            <div className="fullScreen intro">

                <div>
                    <img src={profile.avatar_url} alt="" />
                </div>
                <h2>{profile.login}</h2>
            </div> 
            
            <ProfileInfo profile={profile}/>

            {/** marquee kek */}
            <Repos url={profile.repos_url}/>
        </>
    )
}