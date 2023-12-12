import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/common.css';
import Header, {Quick} from './Component/Header';
import Banner from './Component/Banner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Header />
      <Banner />
  </>
);
