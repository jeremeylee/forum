import React from 'react';
import './homeForumHeader.css';
import { Row, Typography } from 'antd';
import HomeForumPosts from './homeForumPosts';

const HomeForumHeader = (props) => {
  const { Title } = Typography;
  const data = [
    {
      title: 'General Discussion',
    },
    {
      title: 'Memes',
    },
    {
      title: 'Crying Cat Pictures',
    },
    {
      title: 'Morbid Reality',
    },
    {
      title: 'Off Topic',
    },
  ];
  const displayForums = () => (
    data.map(item => (
      <div>
        <Row type="flex" justify="center">
          <div className="header-container">
            <Title level={3} style={{ color: 'white' }}>
              {item.title}
            </Title>
          </div>
        </Row>
        <Row type="flex" justify="center">
          <div className="post-container">
            <HomeForumPosts/>
          </div>
          
        </Row>
      </div>
    ))
  )
  return (
    <div>
      {displayForums()}
    </div>
  )
}

export default HomeForumHeader;
