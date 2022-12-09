import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import form from "./pages/form";
import leafletMap from "./pages/map";
import notFound from "./pages/notFound";

function Routing(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard/>} ></Route>
            <Route path="/form/*" element={<form/>}></Route>

        </Routes>
        </BrowserRouter>
    )
}

export default Routing;