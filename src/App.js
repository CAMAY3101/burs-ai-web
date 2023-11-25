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
import Navbar from './Components/Navbar'
import FooterCustom from './Components/Footer';
import Landing from './Pages/Landing';
import QuieroInvertir from './Pages/QuieroInvertir';


function App() {
  const { Header, Sider,Footer, Content } = Layout;
  return (
    <NextUIProvider>
      <Router>
        <Layout>
          <Navbar/>
          <Content className='app-content'>
            <Routes>
              <Route path='/' element = { <Landing/> } />
              <Route path='/quiero-invertir' element = { <QuieroInvertir/> } />
            </Routes>
          </Content>
          <Footer>
            <FooterCustom />
          </Footer>
        </Layout>
      </Router>
    </NextUIProvider>
  );
}

export default App;
