import React from 'react';
import './forum.css';
import { Row, Col, List, Avatar } from 'antd';

const Forum = (props) => {
  const data = [
    {
      title: 'General Discussion',
      description: 'General topics related to the discussion',
    },
    {
      title: 'Memes',
      description: 'Funny memes for the wholesome folks',
    },
    {
      title: 'Crying Cat Pictures',
      description: 'Big moods in here',
    },
    {
      title: 'Morbid Reality',
      description: 'It really be like that',
    },
    {
      title: 'Off Topic',
      description: '오늘은 여기까지',
    },
  ];

  return (
    <Row type="flex" justify="center">
      <Col xs={12} sm={14} md={16} lg={18} xl={20}>
        <List
          className="forum-board-container"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item
              actions={[`Posts: ${props.posts}`, `Last post: ${props.postDate}`]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://i.ytimg.com/vi/LrQHgABDdlI/hqdefault.jpg" />
                  }
                title={item.title}
                description={item.description}
              />
            </List.Item>  
          )}  
        />
      </Col>
    </Row>
  );
};

export default Forum;
