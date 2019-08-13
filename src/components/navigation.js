import React from 'react';
import './navigation.css';
import { Row, Col, Menu, Icon } from 'antd';

const Navigation = (props) => {
  const { SubMenu } = Menu;
  return (
    <Row type="flex" justify="space-between">
      <Col  xs={2} sm={4} md={6} lg={8} xl={8}>
        <span className=".logo">
          <h1 style={ { color:"rgba(255, 255, 255, 0.65)" } }>
            <Icon type="frown" style={ { color:"rgba(255, 255, 255, 0.65)" } }/> The Forum
          </h1>
        </span>    
      </Col>
      <Col xs={2} sm={2} md={4} lg={5} xl={5}>
        <Menu defaultSelectedKeys={['Home']} mode="horizontal" theme="dark" className="menu">
          <Menu.Item 
            key="Home">
            <Icon type="home" />Home
          </Menu.Item>
{/*           <SubMenu title={
            <span>
              <Icon type="bars" /> Forum
            </span>
          }>
            <Menu.Item key="Forum:1">Forum 1</Menu.Item>
            <Menu.Item key="Forum:2">Forum 2</Menu.Item>
            <Menu.Item key="Forum:3">Forum 3</Menu.Item>
            <Menu.Item key="Forum:4">Forum 4</Menu.Item>
          </SubMenu> */}
          <Menu.Item key="Login">
          <Icon type="login" />Login
          </Menu.Item>
          <Menu.Item key="Signup">
          <Icon type="user-add" />Signup
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Navigation;