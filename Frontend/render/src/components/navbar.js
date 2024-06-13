import React from 'react';
import { useNavigate } from 'react-router'
import "../styles/navbar.css";
import searchIcon from "../icons/search-icon.png";

function Navabr(){

const navigate = useNavigate();

    return (
        <nav>
            {/* <!-- navbar left options --> */}
            <div class="nav-left-options h100">
                {/* <!-- menu button --> */}
                 <div class="menu-btn cursor-hand"></div>

                 {/* <!-- logo --> */}
                  <div class="logo cursor-hand">
                    {/* <!-- <img src="" alt="logo"> --> */}
                     <p>Render</p>
                  </div>
            </div>

            {/* <!-- search bar --> */}
            <div class="search-box">
                <input type="text" id="search" placeholder="Search"></input>
                <div class="search-icon all-center">
                    <img class="cursor-hand" src={searchIcon} alt="search-icon"></img>
                </div>
            </div>

            {/* <!-- navbar right options --> */}
            <div class="nav-right-options h100">
                <button className="cursor-hand" id="user-type-btn">User Type</button>
                
                <a onClick={navigate("/login")} href="/login" class="login">Login</a>

                <div class="profile-btn">
                    <img src="" alt=""></img>
                </div>
            </div>
        </nav>
    );
};

export default Navabr;