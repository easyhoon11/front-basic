import React from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import "./App.css";
import Main from "./View/Main";
import Sub from './View/Sub';
import { useState } from "react";
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import Search from 'View/Search';

function App() {

  const [page, setPage] = useState<'main' | 'sub'>('main');
  
  const { pathname } = useLocation();
  
  return (
    <>
      <Header />
      {/* <h1>{pathname}</h1> */}
      <Routes>
        <Route path='/main' element={<Main setPage={setPage} />} />
        <Route path='/sub' element={<Sub />} />
        <Route path='/search/:word' element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;