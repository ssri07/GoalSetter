import React from 'react';
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {logout, reset} from "../features/auth/authSlice.js";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    }
    return (<header className={"header"}>
        <div className={"logo"}>
            <RouterLink to={"/"}>GoalSetter</RouterLink>
        </div>
        <ul>
            {user ? (<button className={"btn"} onClick={onLogout}><FaSignOutAlt/> Logout</button>
            ) : (<>
                <li>
                    <RouterLink to={"/login"}><FaSignInAlt/> Login</RouterLink>
                </li>
                <li>
                    <RouterLink to={"/register"}><FaUser/> Register</RouterLink>
                </li>
            </>)
            }
        </ul>
    </header>);
};

export default Header;