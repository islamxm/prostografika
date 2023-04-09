import { FC } from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import { Routes, Route } from "react-router-dom";
import StartPage from "../pages/startPage/StartPage";

const App:FC = () => {
    
    return (
        <Wrapper>
            <Routes>
                <Route path="/" Component={StartPage}/>
            </Routes>
        </Wrapper>
    )
}

export default App;