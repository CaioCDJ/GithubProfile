import React, { useEffect, useState } from "react";
import githubApi from "../services/githubApi";
import Card  from './Card';

function Cards(json){

    const Cards = [];

    for (let index = 0; index < json.length; index++) {
        
        Cards.push(json[index]);
    }

    return Cards;
}

const Repos = props =>{

    if(props.url === undefined || props.url == null){
        return ""
    }

    const [repos,setRepos] = useState({});
    // fetch repos
    useEffect(()=>{
        
        githubApi(props.url)
        .then(res=>{

            console.log(res.length);
            setRepos(res)

        }).catch(err=>console.log(err.message))

    },[]);


    return (

        <div className="repos">
            {
                Cards(repos).map(res=>{
                    return <Card repoInfo={res}/>
                })                
            }
        </div>
    )

}


export default Repos;