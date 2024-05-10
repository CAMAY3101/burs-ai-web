import { RouterProvider } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";

import AuthContextProvider from "./Contexts/authContext";

import { router } from "./Config/Router/BrowserRouter";
import './Styles/App.scss';

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </div>
    </NextUIProvider>
  );
}

export default App;