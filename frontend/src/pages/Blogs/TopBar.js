import React from 'react'
import { useNavigate } from "react-router-dom";

export const TopBar = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className="row tm-row">
            <div className="col-11">
                {/* <form method="GET" className="form-inline tm-mb-80 tm-search-form mt-5 mr-5">
                    <input className="form-control tm-search-input" name="query" type="text" placeholder="Search..." aria-label="Search" />
                    <button className="tm-search-button" type="submit">
                        <i className="fas fa-search tm-search-icon" aria-hidden="true"></i>
                    </button>
                </form> */}
            </div>
            <div className="col-1" style={{display: 'flex',justifyContent : 'right'}}>
                <button type="button" class="btn btn-danger" onClick={()=>{localStorage.clear();navigate("/login")}}>Logout</button>
            </div>
        </div>
    </>
  )
}
