import React from 'react';
import './App.css';
import moment from 'moment';
import { Layout, Row, Affix } from 'antd';
import Navigation from './components/navigation';
import Forum from './components/forum';
import Home from './components/home';

const App = (props) => {
  const { Header, Content, Footer } = Layout;

  return (
    <div>
      <Home />
    </div>
  )
};

export default App;
