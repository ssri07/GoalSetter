import {Routes, Route}, {useState} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {createGoal} from "../features/goals/goalSlice";

import Dashboard from "./pages/Dashboard.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";

const App = () => {
    
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createGoal({text}));
        setText('');
    }
    
    return (<>
        <div className="container">

               <header className="header">
                <div className="logo">
                    <RouterLink to={"/"}>GoalSetter</RouterLink>
                </div>
                <ul>
                {user ? (<button className="btn" onClick={onLogout}><FaSignOutAlt/> Logout</button>
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
            </header>
            <Routes>
                <Route path={"/"} element={<Dashboard/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/register"} element={<Register/>}/>
            </Routes>
        </div>
    </>)
}

export default App
