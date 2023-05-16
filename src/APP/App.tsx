import { FC } from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import { Routes, Route } from "react-router-dom";
import StartPage from "../pages/startPage/StartPage";
import AuthPage from "../pages/authPage/AuthPage";
import FormatPage from "../pages/formatPage/FormatPage";


const App:FC = () => {
    
    return (
        <Wrapper>
            <Routes>
                <Route path="/" Component={StartPage}/>
                <Route path="/auth" Component={AuthPage}/>
                <Route path="/format" Component={FormatPage}/>
            </Routes>
        </Wrapper>
    )
}

export default App;