import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/about';
import Blog from './routes/blog';
import Projects from './routes/projects';
import Main from './routes/Main'
import Blog2 from './routes/blog2'
import Blog3 from './routes/blog3'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
      <Route path='/' element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path='projects' element={<Projects />} />
      <Route path='blog' element={<Blog />} />
      <Route path='blog2' element={<Blog2 />} />
      <Route path='blog3' element={<Blog3 />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


