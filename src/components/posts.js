import React from 'react';
import './posts.css';
import { Row, Col, Typography, List, Avatar, Icon } from 'antd';

const { Title } = Typography;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Posts = (props) => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Man charged over missing wedding girl.',
    'Japanese princess to wed commoner.',
    'Racing car sprays burning fuel into crowd.',
    'Man charged over missing wedding girl.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Los Angeles battles huge wildfires.',
    'Japanese princess to wed commoner.',
    'Racing car sprays burning fuel into crowd.',
    'Los Angeles battles huge wildfires.',
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Racing car sprays burning fuel into crowd.',
    'Australian walks 100km after outback crash.',
    'Australian walks 100km after outback crash.',
    'Los Angeles battles huge wildfires.',
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Japanese princess to wed commoner.',
    
  ];

  return (
    <Row type="flex" justify="center">
      <Col xs={6} sm={8} md={10} lg={12} xl={14}>
        <Title level={2} className="board-name">{props.boardName}</Title>
        <List
          className="posts-container"
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 5,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item
              actions={[
                <IconText type="like-o" text="156" key="list-vertical-star-o" />,
                <IconText type="dislike-o" text="156" key="list-vertical-like-o" />,
                <IconText type="message" text="2" key="list-vertical-message" />,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src="https://66.media.tumblr.com/736642e05f37a2bcb6f3806f2dcc56b2/tumblr_pgp91sWx0N1vmskmwo1_500.png" />}
                title={item}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default Posts;
