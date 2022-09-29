import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import GlobalStyle from './GlobalStyle';
import { Footer, Header } from './Components'
import { Home, Mint } from './Views'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mint" element={<Mint />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
