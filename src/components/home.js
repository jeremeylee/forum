import React from 'react';
import moment from 'moment';
import { Layout, Row, Affix } from 'antd';
import Navigation from './navigation';
import Forum from './forum';

const Home = (props) => {
  const { Header, Content, Footer } = Layout;

  return (
    <div>
      <Content style={{ marginTop: '64px'}}>
        <Forum
          posts='10'
          postDate={moment().format('MM/DD/YYYY, h:mm a')}
        />
      </Content>
    </div>
  );
};

export default Home;
