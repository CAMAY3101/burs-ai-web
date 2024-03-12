import React from 'react'
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import { Layout} from '@douyinfe/semi-ui';
import './Styles/App.scss';
import Navbar from './Components/Navbar'
import FooterCustom from './Components/Footer';
import Landing from './Pages/Landing';
import QuieroInvertir from './Pages/QuieroInvertir';
import SolicitarPrestamo from './Pages/SolicitarPrestamo';
import CreaTuCuenta from './Pages/SignUp/CreaTuCuenta';
import IngresaTusDatos from './Pages/SignUp/IngresaTusDatos';
import VerificacionCorreo from './Pages/SignUp/VerificacionCorreo';
import VerificacionTelefono from './Pages/SignUp/VerificacionTelefono';

function App() {
  const { Header, Sider, Footer, Content } = Layout;
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
        <Layout>
          <Navbar/>
          <Content className='app-content'>
            <Routes>
              <Route path='/' element = { <Landing/> } />
              <Route path='/quiero-invertir' element = { <QuieroInvertir/> } />
              <Route path='/solicitar-prestamo' element = { <SolicitarPrestamo/> } />
              <Route path='/registro' element = { <CreaTuCuenta/> } />
              <Route path='/ingresar-datos' element = { <IngresaTusDatos/> } />
              <Route path='/verificar-correo' element = { <VerificacionCorreo/> } />
              <Route path='/verificar-telefono' element = { <VerificacionTelefono/> } />
            </Routes>
          </Content>
          <Footer>
            <FooterCustom />
          </Footer>
        </Layout>
    </NextUIProvider>
  );
}

export default App;
