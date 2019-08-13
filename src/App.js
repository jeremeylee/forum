import React from 'react';
import './App.css';
import { Layout, Row, Affix } from 'antd';
import Home from './components/home';
import Navigation from './components/navigation';

const App = (props) => {
  const { Header, Content, Footer } = Layout;

  return (
    <div>
      <Layout>
        <Affix>
          <Header>
            <Navigation />
          </Header>
        </Affix>
        
      </Layout>
      
    </div>
  )
};

export default App;
