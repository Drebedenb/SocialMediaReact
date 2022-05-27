import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <h1>Navigation</h1>
            <nav>
                <ul>
                    <li><NavLink to="/profile"
                                 className={navData => navData.isActive ? s.active : s.link}>Profile</NavLink></li>
                    <li><NavLink to="/dialog"
                                 className={navData => navData.isActive ? s.active : s.link}>Messages</NavLink></li>
                    <li><NavLink to="/settings"
                                 className={navData => navData.isActive ? s.active : s.link}>Settings</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;