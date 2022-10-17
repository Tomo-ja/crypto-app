import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar, Homepage, Cryptocurrencies, CryptoDetails, News } from './components';

import './styles/app.css'


function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className="routes">
            <Routes>
              <Route path='/' element={<Homepage />}/>
              <Route path='/cryptocurrencies' element={<Cryptocurrencies simplified={false}/>} />
              <Route path='/crypto/:coinId' element={<CryptoDetails />}/>
              <Route path='/news' element={<News simplified={false}/>}/>
              <Route path='*' element={<div>Ops... Wrong path</div>} />
            </Routes>
          </div>
        </Layout>
        <footer className='footer' >
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Crypto Helper<br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/news'>News</Link>
          </Space>
        </footer>
      </div>
    </div>
  );
}

export default App;
