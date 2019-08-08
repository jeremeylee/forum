import React from 'react';
import './homeForumHeader.css';
import { Row, List, Card, Typography } from 'antd';
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
      <Row type="flex" justify="center">
        <div className="header-container">
          <Title level={3} style={{ color: 'white' }}>
            {item.title}
          </Title>
        </div>
      </Row>
    ))
  )
  return (
    <diV>
      {displayForums()}
    </diV>
  )
}

export default HomeForumHeader;
