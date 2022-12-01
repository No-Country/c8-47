import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
// import { Banner } from './Components/Banner/Banner';
// import { FeatureList } from './Components/Feature/FeatureList';
// import { Paragraph } from './Components/Feature/Paragraph';
import AppRoutes from './Components/AppRoutes';
import Register from './Components/Register';
import Signin from './Components/Signin';
function App() {
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalSignin, setShowModalSignin] = useState(false);
  const [viewButtonsRegister, setViewButtonsRegister] = useState(true);
  const [viewButtonsLogin, setViewButtonsLogin] = useState(true);
  const [actionRegister, setActionRegister] = useState(false);
  return (
    <div className='App bg-white dark:bg-bgDarkMode overflow-x-hidden'>
      <BrowserRouter>
        <Header
          onClickRegister={() => setShowModalRegister(true)}
          onClickSignin={() => setShowModalSignin(true)}
          actionRegister={actionRegister}
          onClose={() => {
            setActionRegister(false);
            setShowModalRegister(false);
            setShowModalSignin(false);
            setViewButtonsRegister(true);
            setViewButtonsLogin(true);
          }}
        />
        <Register
          onView={() => setViewButtonsRegister(false)}
          viewButtons={viewButtonsRegister}
          isVisible={showModalRegister}
          onClose={() => setShowModalRegister(false)}
          onSwitch={() => {
            setShowModalRegister(false);
            setShowModalSignin(true);
          }}
        />
        <Signin
          onView={() => setViewButtonsLogin(false)}
          viewButtons={viewButtonsLogin}
          isVisible={showModalSignin}
          onClose={() => setShowModalSignin(false)}
          onSwitch={() => {
            setShowModalSignin(false);
            setShowModalRegister(true);
          }}
        />
        <AppRoutes
          onView={() => {
            setShowModalRegister(true);
            setActionRegister(true);
          }}
        />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
