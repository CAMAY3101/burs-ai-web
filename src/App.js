import './Styles/App.scss';
import Landing from './Pages/Landing';
import React from 'react'
import { NextUIProvider } from '@nextui-org/react';


function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <Landing />
        hello
      </div>
    </NextUIProvider>
  );
}

export default App;
