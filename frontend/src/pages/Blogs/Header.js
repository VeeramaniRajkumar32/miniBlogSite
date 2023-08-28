import React from "react";
import { useLocation, useNavigate } from "react-router";
export const Header = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname;
//   const userObj = JSON.parse(props.user)
  console.log({props});
  return (
    <div>
      <header className="tm-header" id="tm-header">
        <div className="tm-header-wrapper">
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          
          <div className="tm-site-header">
            <div className="mb-3 mx-auto tm-site-logo">
              <img src="%PUBLIC_URL%/favicon.ico" alt="" />
            </div>
            <h1 className="text-center"></h1>
          </div>
          <nav className="tm-nav" id="tm-nav">
            <ul>
              <li
                className={`tm-nav-item ${active === "/" && "active"}`}
                onClick={() => navigate("/")}
              >
                <a className="tm-nav-link">
                  <i className="fas fa-home"></i>
                  Blog Home
                </a>
              </li>
              {/* <li
                className={`tm-nav-item ${
                  active === "/singalPost" && "active"
                }`}
                onClick={() => navigate("/singalPost")}
              >
                <a className="tm-nav-link">
                  <i className="fas fa-pen"></i>
                  Single Post
                </a>
              </li> */}
            </ul>
          </nav>

          {/* <p className="tm-mb-80 pr-5 text-white">
            Xtra Blog is a multi-purpose HTML template from TemplateMo website.
            Left side is a sticky menu bar. Right side content will scroll up
            and down.
          </p> */}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </header>
    </div>
  );
};
