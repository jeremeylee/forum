import React from 'react';
import './App.css';
import moment from 'moment';
import { Layout, Row, Affix } from 'antd';
import Navigation from './components/navigation';
import Forum from './components/forum';

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
          {/* <HomeForumHeader/> */}
          <Forum
            posts='10'
            postDate={moment().format('MM/DD/YYYY, h:mm a')}
          />
        </Content>
        <Row type="flex" justify="center">
          <Footer style= {{position: 'absolute', bottom:'0'}}>
            Forum ©2019 Created by Jeremey & Kyle
          </Footer>
        </Row>
      </Layout>
    </div>
  )
};

export default App;
