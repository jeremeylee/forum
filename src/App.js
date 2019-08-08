import React from 'react';
import './App.css';
import { Layout, Affix } from 'antd';
import Navigation from './components/navigation';
import HomeForumHeader from './components/homeForumHeader';

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
        <Content style={{ marginTop: '64px'}}>
          <HomeForumHeader/>
        </Content>
        <Footer style= {{ textAlign: 'center' }}>
        Forum ©2019 Created by Jeremey & Kyle
        </Footer>
      </Layout>
    </div>
  )
};

export default App;
