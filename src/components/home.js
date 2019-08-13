import React from 'react';
import moment from 'moment';
import { Layout, Row, Affix } from 'antd';
import Navigation from './navigation';
import Forum from './forum';

const Home = (props) => {
  const { Header, Content, Footer } = Layout;

  return (
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
  );
};

export default Home;
