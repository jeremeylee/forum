import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Layout, Row, Affix } from 'antd';
import Navigation from './components/navigation';
import Home from './components/home';
import Login from './components/login';

const App = (props) => {
  const { Header, Content, Footer } = Layout;

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
        </Layout>
      </Router>
    </div>
  );
};

export default App;
