import { FC } from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import { Routes, Route } from "react-router-dom";
import StartPage from "../pages/startPage/StartPage";
import AuthPage from "../pages/authPage/AuthPage";
import FormatPage from "../pages/formatPage/FormatPage";
import PricingPage from "../pages/pricingPage/PricingPage";
import { Provider } from "react-redux";
import store from "../store/store";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import UploadEditPage from "../pages/uploadEditPage/UploadEditPage";
import CardsPage from "../pages/cardsPage/CardsPage";

//  "start": "set HTTPS=true&&set SSL_CRT_FILE=C:/Windows/System32/cert.crt&&set SSL_KEY_FILE=C:/Windows/System32/cert.key&&react-scripts start",


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
                        <Route path="/my_cards" element={<CardsPage/>}/>
                    </Routes>
                </AnimatePresence>
              
            </Wrapper>
        </Provider>
        
    )
}

export default App;