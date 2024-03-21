import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './componants/Home/Home';
import Blogs from './componants/Blogs/Blogs';
import Bookmarks from './componants/Bookmarks';
import Root from './layout/Root';
import Blog from './componants/Blogs/Blog';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
path: '/',
element:<Home></Home>
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs>,
        loader: ()=> fetch('https://dev.to/api/articles?per_page=30&top=7')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/bookmarks',
        element:<Bookmarks></Bookmarks>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
