import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import SearchPage from "./pages/Search"; 
import Main from "./pages/Main";

const Rotas = props=>{

    return(
        <Router>
                <Routes>
                    <Route index element={<SearchPage/>}  />
                    <Route path="/profile/:name" element={<Main/>}/>
                </Routes>
        </Router>
    )
}

export default Rotas