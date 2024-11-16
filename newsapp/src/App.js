
import './App.css';

import React from 'react'
import { useState } from 'react';
import Navbar from './componeds/Navbar';
import News from './componeds/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
const pageSize=6;

 const apikey=process.env.REACT_APP_NEWS_API;
 
 const [progress, setProgress] = useState(0)
 
  
    return (
      <div>
      <BrowserRouter>
          
        <Navbar></Navbar>
        <LoadingBar height={3} color='#f11946' progress={progress}/>
        
        <Routes>
        
          
          <Route exact path="/"  element={<News setProgress={setProgress}  apikey={apikey} pageSize={pageSize} key="general" country="" category="general"></News>}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress}  apikey= { apikey} pageSize={pageSize} key="sports" country="" category="sports"></News>} ></Route>
          <Route exact path="/business" element={<News setProgress={setProgress}  apikey= { apikey} pageSize={pageSize} key="business" country="" category="business"></News>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress}  apikey= { apikey} pageSize={pageSize} key="entertainment" country="" category="entertainment"></News>}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress}  apikey= { apikey} pageSize={pageSize} key="health" country="" category="health"></News>}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress}  apikey= { apikey} pageSize={pageSize} key="technology" country="" category="technology"></News>}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress}  apikey= { apikey} pageSize={pageSize} key="science" country="" category="science"></News>}></Route>
       
          </Routes>
       
        </BrowserRouter>
        </div>
    )
  
}

export default App

