import React from 'react';
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import {Link as RouterLink} from 'react-router-dom';

const Header = () => {
    return (<header className={"header"}>
        <div className={"logo"}>
            <RouterLink to={"/"}>GoalSetter</RouterLink>
        </div>
        <ul>
            <RouterLink to={"/login"}><FaSignInAlt/> Login</RouterLink>
            <RouterLink to={"/register"}><FaUser/> Register</RouterLink>
        </ul>
    </header>);
};

export default Header;