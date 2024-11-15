import { RouterProvider } from 'react-router-dom';
import AuthContextProvider from './Contexts/authContext';
import { router } from './Config/Router/BrowserRouter'

export default function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  )
}
