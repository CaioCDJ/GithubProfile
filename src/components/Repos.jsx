import React, { useEffect, useState } from "react";
import githubApi from "../services/githubApi";
import Card  from './Card';

import jsonToArray from "../helpers/jsonToArray";

import "./repos.css";

const Repos = props =>{

    if(props.url === undefined || props.url == null){
        return ""
    }

    const [repos,setRepos] = useState({});
    // fetch repos
    useEffect(()=>{
        
        githubApi(props.url)
        .then(res=>{

            setRepos(res)

        }).catch(err=>console.log(err.message))

    },[]);


    return (

        <div className="flexCol">
            <h2>-- Repositories --</h2>

            <div className="repos">
            {
                    jsonToArray(repos).map(repo=>{
                        return <Card repoInfo={repo} key={repo.id} />
                    })                
                }
            </div>
        </div>
    )

}


export default Repos;