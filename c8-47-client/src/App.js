import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Banner } from './Components/Banner/Banner';
import { FeatureList } from './Components/Feature/FeatureList';
import { Paragraph } from './Components/Feature/Paragraph';
import AppRoutes from './Components/AppRoutes';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        {/* <Banner /> */}
        {/* <FeatureList /> */}
        {/* <Paragraph /> */}
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
