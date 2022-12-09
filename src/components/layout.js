import React from "react";
import Routing from "../routes"
 import Sidebar from "./sidebar";

function Layout(props) {
    return(
        <div>
            <p> Example Tool</p>
            <div>
                <Sidebar/>
                <Routing/>
            </div>
        </div>
    );
}

export default Layout