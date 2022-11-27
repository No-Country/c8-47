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
  return (
    <div className='App bg-white dark:bg-bgDarkMode '>
      <BrowserRouter>
        <Header
          onClickRegister={() => setShowModalRegister(true)}
          onClickSignin={() => setShowModalSignin(true)}
        />
        <Register
          isVisible={showModalRegister}
          onClose={() => setShowModalRegister(false)}
          onSwitch={() => {
            setShowModalRegister(false);
            setShowModalSignin(true);
          }}
        />
        <Signin
          isVisible={showModalSignin}
          onClose={() => setShowModalSignin(false)}
          onSwitch={() => {
            setShowModalSignin(false);
            setShowModalRegister(true);
          }}
        />
        <AppRoutes />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
