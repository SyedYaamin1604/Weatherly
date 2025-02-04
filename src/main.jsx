import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import Layout from './Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Forecast from './Pages/Forecast/Forecast.jsx'
import { RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/forecast',
        element: <Forecast />,
      },
      {
        path: "*",
        element: <h1>Not FOund</h1>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}></RouterProvider>
)