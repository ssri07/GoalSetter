import {Routes, Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Header from "./components/Header.jsx";

const App = () => {
    return (<>
        <div className={"container"}>

            <Header/>
            <Routes>
                <Route path={"/"} element={<Dashboard/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/register"} element={<Register/>}/>
            </Routes>
        </div>
    </>)
}

export default App
