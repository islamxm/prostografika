import Wrapper from "@components/Wrapper/Wrapper";
import CheckAuth from "@hoc/CheckAuth";
import AuthPage from "@pages/authPage/AuthPage";
import CardsPage from "@pages/cardsPage/CardsPage";
import EditCardPage from "@pages/editCardPage";
import FormatPage from "@pages/formatPage/FormatPage";
import GensPage from "@pages/gensPage/GensPage";
import PersonalGenPage from "@pages/personalGenPage/PersonalGenPage";
import PricingPage from "@pages/pricingPage/PricingPage";
import StartPage from "@pages/startPage/StartPage";
import TempsPage from "@pages/tempsPage/TempsPage";
import UploadEditPage from "@pages/uploadEditPage/UploadEditPage";
import store from "@store/store";
import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

//  "start": "set HTTPS=true&&set SSL_CRT_FILE=C:/Windows/System32/cert.crt&&set SSL_KEY_FILE=C:/Windows/System32/cert.key&&react-scripts start",

const App: FC = () => {
  const location = useLocation();


  return (
    <Provider store={store}>
      <Wrapper>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<CheckAuth><StartPage /></CheckAuth>} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/format" element={<CheckAuth><FormatPage /></CheckAuth>} />
            <Route path="/pricing" element={<CheckAuth><PricingPage /></CheckAuth>} />
            <Route path="/upload_edit" element={<CheckAuth><UploadEditPage /></CheckAuth>} />
            <Route path="/my_cards" element={<CheckAuth><CardsPage /></CheckAuth>} />
            <Route path="/templates" element={<CheckAuth><TempsPage /></CheckAuth>} />
            <Route path="/generations" element={<CheckAuth><GensPage /></CheckAuth>} />
            <Route path="/personal_generation" element={<CheckAuth><PersonalGenPage /></CheckAuth>} />
            <Route path="/edit_card_content" element={<CheckAuth><EditCardPage /></CheckAuth>} />
          </Routes>
        </AnimatePresence>
      </Wrapper>
    </Provider>

  );
};

export default App;