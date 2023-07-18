import {React, useRef} from "react";
import "./style.css"
import { HashLink } from "react-router-hash-link";

export const SocialMediaMenu = () => {

    const width = useRef([window.innerWidth, window.innerHeight]).current[0];

    if (width>1200) {
        return (
        
            <div className="social-media-menu">
                <a href="https://github.com/futureforyoungscientists" target="_blank"><img className="github-icon" alt="Profile pic" src="/img/icons8-github-480.png" /></a>
                <a href="https://www.instagram.com/futureforyoungscientists/?hl=en" target="_blank"><img className="instagram-icon" alt="Profile pic"  src="/img/icons8-instagram-480.png" /></a>
                <a href="https://www.linkedin.com/company/futureforyoungscientists" target="_blank"><img className="linkedin-icon" alt="Profile pic" src="/img/icons8-linkedin-480.png" /></a>
                <a href="https://www.facebook.com/futureforyoungscientists" target="_blank"><img className="facebook-icon" alt="Profile pic" src="/img/icons8-facebook-480.png" /></a>
                <a href="https://www.tiktok.com/en/" target="_blank"><img className="tiktok-icon" alt="Profile pic"  src="/img/icons8-tiktok-480.png" /></a>
    
            </div>
                
            
        );
    };

    return (
        <div className="social-media-menu-mobile">
          <div className="overlap-group">
            <HashLink smooth to="/#top"><div className="text-wrapper">return to top</div></HashLink>
            <a href="https://www.instagram.com/futureforyoungscientists/?hl=en" target="_blank"><img className="instagram-icon" alt="insta icon"  src="/img/icons8-instagram-480.png" /></a>
            <a href="https://www.facebook.com/futureforyoungscientists" target="_blank"><img className="facebook-icon" alt="Profile pic" src="/img/icons8-facebook-480.png" /></a>            
            <a href="https://www.linkedin.com/company/futureforyoungscientists" target="_blank"><img className="linkedin-icon" alt="Profile pic" src="/img/icons8-linkedin-480.png" /></a>
            <a href="https://github.com/futureforyoungscientists" target="_blank"><img className="github-icon" alt="Profile pic" src="/img/icons8-github-480.png" /></a>
            <a href="https://www.tiktok.com/en/" target="_blank"><img className="tiktok-icon" alt="Profile pic"  src="/img/icons8-tiktok-480.png" /></a>
            <div className="text-wrapper-2">follow our journey</div>
          </div>
        </div>
    )
    
}
