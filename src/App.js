import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Navigation from './components/navigation';

const App = (props) => {
  const { Header, Content, Footer } = Layout;

  return (
    <div>
      <Layout>
        <Header>
          <Navigation />
        </Header>
        <Content>
          Content
        </Content>
        <Footer style= {{ textAlign: 'center' }}>
        Forum ©2019 Created by Jeremey & Kyle
        </Footer>
      </Layout>
    </div>
  )
};

export default App;
