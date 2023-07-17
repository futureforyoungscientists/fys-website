import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./stylesheets/CompactMenu.css"

export const CompactMenu = () => {
    return (
        
        <div className="compact-menu">
            <div className="aboutus-compactMenu"><Link smooth to="/aboutUs">about us.</Link></div>
            <div className="blog-compactMenu"><Link to="/blog">blog.</Link></div>
            <div className="socials-compactMenu"><HashLink smooth to="/#socials">socials.</HashLink></div>
            <Link to="/"><img className="FYSlogo-compactMenu" alt="Fys logo" src="/img/fys-logo-6-1.png" /></Link>
        </div>
            
        
    )
}
