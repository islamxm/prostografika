import { FC } from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import { Routes, Route } from "react-router-dom";
import StartPage from "../pages/startPage/StartPage";
import AuthPage from "../pages/authPage/AuthPage";
import FormatPage from "../pages/formatPage/FormatPage";
import PricingPage from "../pages/pricingPage/PricingPage";
import { Provider } from "react-redux";
import store from "../store/store";
import CheckAuth from "../hoc/CheckAuth";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import UploadEditPage from "../pages/uploadEditPage/UploadEditPage";

const App:FC = () => {
    const location = useLocation()


    return (
        <Provider store={store}>
            <Wrapper>
                <AnimatePresence mode="wait" initial={false}>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<StartPage/>}/>
                        <Route path="/auth" element={<AuthPage/>}/>
                        <Route path="/format" element={<FormatPage/>}/>
                        <Route path="/pricing" element={<PricingPage/>}/>
                        <Route path="/upload_edit" element={<UploadEditPage/>}/>
                    </Routes>
                </AnimatePresence>
              
            </Wrapper>
        </Provider>
        
    )
}

export default App;