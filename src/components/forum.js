import React from 'react';
import { List, Avatar } from 'antd';

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
    <List
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
  );
};

export default Forum;
