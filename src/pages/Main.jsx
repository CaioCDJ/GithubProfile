import React, { useEffect, useState } from "react";

import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import githubApi from "../services/githubApi";
import Footer from '../components/Footer.jsx';

import "./Main.css"
import Followers from "../components/Followers";
import { useParams } from "react-router-dom";

export default function Main(){

    let {name} = useParams();

    if(name == undefined || null) return""

    const [profile,setProfile] = useState({});

    useEffect(()=>{

        githubApi(`https://api.github.com/users/${name}`)
        .then(response =>{
            setProfile(response);
        })
    },[])

    return(
        <>
            
            <ProfileInfo profile={profile}/>

            <Followers url={profile.followers_url} />

            <Repos url={profile.repos_url}/>
            
            <Footer />
        </>
    )
}