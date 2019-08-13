import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';

const Signup = (props) => {
  const { getFieldDecorator, validateFields } = props.form;

  return (
    <Row type="flex" justify="center">
    <Form className="signup-container">
      <Row type="flex" justify="start">
        <Col xs={8} sm={10} md={12} lg={14} xl={16}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
        </Col>
      </Row>
      <Row type="flex" justify="start">
        <Col xs={8} sm={10} md={12} lg={14} xl={16}>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
        </Col>
      </Row>
      <Row type="flex" justify="start">
        <Form.Item>
        <Row type="flex" justify="start">
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Row>
          Already have an account? <Link to="/login">Login!</Link>
        </Form.Item>
        </Row>
      </Form>
    </Row>
  );
};

export default Form.create()(Signup);
