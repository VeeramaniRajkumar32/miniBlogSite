import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../veeraLogo.png'

export const TopBar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user);
  return (
    <>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand d-flex col-9 text-center" onClick={()=>navigate("/")} >
                    <div className="col-sm-4 text-start">
                        <img className="" src={logo} width="50px" height="50px" />
                    </div>
                    <div className="col-sm-6 mt-2">
                        {userObj.name}
                    </div>
                </a>
                <div className="col-3" style={{width: "100px"}}>
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
            </div>
        </nav>
    </>
  );
};
