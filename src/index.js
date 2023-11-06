import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './component/ReactRouter/Home/Home';
import About from './component/ReactRouter/About/About'
import Contact from './component/ReactRouter/Contact/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:'about',
        element:<About />
      },
      {
        path:'Contact',
        element:<Contact />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);


