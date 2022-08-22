import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './App';
import AddPosts from './components/addPosts.jsx';
import { Store } from './store.js';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePost from './components/singlePost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/post'  element={<AddPosts />}/>
          <Route path='/edit' element={<SinglePost />}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
