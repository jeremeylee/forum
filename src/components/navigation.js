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
      <Col xs={2} sm={2} md={4} lg={5} xl={5}>
        <Menu defaultSelectedKeys={['Home']} mode="horizontal" theme="dark" className="menu">
          <Menu.Item
            key="Home"
        >
            <Link to="/">
              <Icon type="home" />
              Home
            </Link>
          </Menu.Item>
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
