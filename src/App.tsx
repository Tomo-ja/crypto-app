import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar, Homepage, Cryptocurrencies, CryptoDetails, Exchanges, News } from './components';

import './styles/app.css'


function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className="routes">
            <Routes>
              <Route path='/' element={<Homepage />}/>
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />}/>
              <Route path='/cryptocurrencies/:coinId' element={<CryptoDetails />}/>
              <Route path='/exchanges' element={<Exchanges />}/>
              <Route path='/news' element={<News />}/>
            </Routes>
          </div>
        </Layout>
        <footer className='footer' >
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Cryptoverse<br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </footer>
      </div>
    </div>
  );
}

export default App;
