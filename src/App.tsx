import React, { useState, Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import GlobalStyle from './GlobalStyle';
import { Footer, Header } from './Components'
import { Home, Mint, Launch } from './Views'
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('#00081B')
  return (
    <BrowserRouter>
      <GlobalStyle color={bgColor} />
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home setBgColor={setBgColor} />} />
          <Route path="/mint" element={<Mint setBgColor={setBgColor} />} />
          <Route path="/launch" element={<Launch setBgColor={setBgColor} />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
