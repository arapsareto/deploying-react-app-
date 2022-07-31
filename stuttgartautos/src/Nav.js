import React from "react";
import { NavLink } from "react-router-dom";

export function NavBar(){

    const styles={
        color:'black'
    }
    return(
        <nav>
            <ul className="navs">
                <NavLink to='/about' style={styles}>About</NavLink>
                <NavLink to='/completed' style={styles}>Completed</NavLink>
                <NavLink to='/book' style={styles}>Book</NavLink>
                <NavLink to='/review' style={styles}>Review</NavLink>
                

            </ul>
        </nav>
    );
}