import React from 'react'
import { useLocation, useNavigate } from 'react-router';
export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const active = location.pathname;
  return (
    <div>   <header className="tm-header" id="tm-header">
    <div className="tm-header-wrapper">
        <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
        </button>
        <div className="tm-site-header">
            <div className="mb-3 mx-auto tm-site-logo"><i className="fas fa-times fa-2x"></i></div>            
            <h1 className="text-center">Xtra Blog</h1>
        </div>
        <nav className="tm-nav" id="tm-nav">            
            <ul>
                <li className={`tm-nav-item ${active ==="/" && 'active'}`} onClick={()=>navigate("/")}><a  className="tm-nav-link">
                    <i  className="fas fa-home"></i>
                    Blog Home
                    </a>
                </li>
                <li className={`tm-nav-item ${active ==="/singalPost" && 'active'}`} onClick={()=>navigate("/singalPost")} ><a className="tm-nav-link">
                    <i className="fas fa-pen" ></i>
                    Single Post
                </a></li>
              
            </ul>
        </nav>
     
        <p className="tm-mb-80 pr-5 text-white">
            Xtra Blog is a multi-purpose HTML template from TemplateMo website. Left side is a sticky menu bar. Right side content will scroll up and down.
        </p>
        <button type="button" class="btn btn-danger" onClick={()=>{localStorage.clear();navigate("/login")}}>Logout</button>
    </div>
    </header></div>
  )
}
