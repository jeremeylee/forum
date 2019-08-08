import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Navigation from './components/navigation';

const App = (props) => {
  const { Header } = Layout;

  return (
    <div>
      <Layout>
        <Header>
          <Navigation />
        </Header>
      </Layout>

    </div>
  )
};

export default App;
