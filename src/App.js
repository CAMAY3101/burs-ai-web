import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Layout} from '@douyinfe/semi-ui';

import { NextUIProvider } from '@nextui-org/react';
import './Styles/App.scss';
import NavbarLanding from './Components/navbarLanding';
import Landing from './Pages/Landing';
import QuieroInvertir from './Pages/QuieroInvertir';


function App() {
  const { Header, Sider, Content } = Layout;
  return (
    <NextUIProvider>
      <Router>
        <Layout>
          <NavbarLanding/>
          <Content className='app-content'>
            <Routes>
              <Route path='/' element = { <Landing/> } />
              <Route path='/quiero-invertir' element = { <QuieroInvertir/> } />
            </Routes>
          </Content>
        </Layout>
      </Router>
    </NextUIProvider>
  );
}

export default App;
