import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

import "./search.css"

const searchPage = props =>{

    const [name,setName] = useState("");
    const navigate = useNavigate();

    const handler = (event)=>{

        event.preventDefault();

        const url = `/profile/${name}`;
        navigate(url);
    }
 
    return(

        <>
            <main className="search">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                <h1>Github Profile</h1>
               
                <form onSubmit={handler}>
                    <input placeholder="Search Profile"
                         type="text"
                         value={name}
                         onChange={(e)=> setName(e.target.value)} />
                </form>

            </main>
            <Footer/>
        </>
    )
}

export default searchPage;