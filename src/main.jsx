import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import pages//////////////////////////
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Blog from './pages/Blog.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';
import Propage from './pages/Propage.jsx';
import Addtocart from './pages/Addtocart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/cart',
        element: <Addtocart/>
      },
      {
        path:'/product_detail/:key',
        element:<Propage/>
      },
      {
        path:'/shop/product_detail/:key',
        element:<Propage/>
      }

    ]
    
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  
)
