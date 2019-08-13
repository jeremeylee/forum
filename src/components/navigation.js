import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import {
  Row, Col, Menu, Icon,
} from 'antd';

const Navigation = (props) => {
  const { SubMenu } = Menu;
  return (
    <Row type="flex" justify="space-between">
      <Col xs={2} sm={4} md={6} lg={8} xl={8}>
        <span className=".logo">
          <h1 style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
            <Icon type="frown" style={{ color: 'rgba(255, 255, 255, 0.65)' }} />
            {' '}
            The Forum
          </h1>
        </span>
      </Col>
      <Col xs={2} sm={2} md={4} lg={5} xl={6}>
        <Menu defaultSelectedKeys={['Home']} mode="horizontal" theme="dark" className="menu">
          <Menu.Item
            key="Home"
        >
            <Link to="/">
              <Icon type="home" />
              Home
            </Link>
          </Menu.Item>
          <SubMenu title={
            <span>
              <Icon type="bars" /> Forum
            </span>
          }>
            <Menu.Item key="Forum:1"><Link to="/general-discussion">General Discussion</Link></Menu.Item>
            <Menu.Item key="Forum:2"><Link to="/memes">Memes</Link></Menu.Item>
            <Menu.Item key="Forum:3"><Link to="/crying-cat">Crying Cat Pictures</Link></Menu.Item>
            <Menu.Item key="Forum:4"><Link to="/morbid-reality">Morbid Reality</Link></Menu.Item>
            <Menu.Item key="Forum:5"><Link to="/off-topic">Off Topic</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="Login">
            <Link to="/login">
              <Icon type="login" />
              Login
            </Link>
          </Menu.Item>
          <Menu.Item key="Signup">
            <Link to="/signup">
              <Icon type="user-add" />
              Signup
            </Link>

          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Navigation;
