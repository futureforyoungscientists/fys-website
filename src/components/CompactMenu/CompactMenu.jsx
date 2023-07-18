import {React, useRef} from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./style.css"

export const CompactMenu = () => {
    
    const width = useRef([window.innerWidth, window.innerHeight]).current[0];

    
    if (width > 1200) {
        return (
            
            <div className="compact-menu-desktop">
                <div className="aboutus-compactMenu"><Link smooth to="/aboutUs">about us.</Link></div>
                <div className="blog-compactMenu"><Link to="/blog">blog.</Link></div>
                <div className="socials-compactMenu"><HashLink smooth to="/#socials">socials.</HashLink></div>
                <Link to="/"><img className="FYSlogo-compactMenu" alt="Fys logo" src="/img/fys-logo-6-1.png" /></Link>
            </div>
                
            
        );
    };

    return (
        
        <div className="compact-menu-mobile">
            <div className="text-wrapper-5"><Link smooth to="/aboutUs">about us.</Link></div>
            <div className="text-wrapper-6"><Link to="/blog">blog.</Link></div>
            <div className="text-wrapper-7"><HashLink smooth to="/#socials">socials.</HashLink></div>
            <Link to="/"><img className="FYS-logo" alt="Fys logo" src="/img/fys-logo-6-1.png" /></Link>
        </div>
            
        
    );


}
