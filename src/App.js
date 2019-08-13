import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Layout, Row, Affix } from 'antd';
import Home from './components/home';
import Navigation from './components/navigation';

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
        </Layout>
      </Router>
    </div>
  );
};

export default App;
