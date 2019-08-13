import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Layout, Row, Affix } from 'antd';
import Navigation from './components/navigation';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';

const App = (props) => {
  const { Header, Footer } = Layout;

  return (
    <div>
      <Router>
        <Layout>
          <Affix>
            <Header>
              <Navigation />
            </Header>
          </Affix>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Row type="flex" justify="center">
            <Footer style= {{position: 'absolute', bottom:'0'}}>
              Forum ©2019 Created by Jeremey & Kyle
            </Footer>
          </Row>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
