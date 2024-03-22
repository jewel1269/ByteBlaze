import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './componants/Home/Home';
import Blogs from './componants/Blogs/Blogs';
import Bookmarks from './componants/Bookmarks';
import Root from './layout/Root';
import Blog from './componants/Blogs/Blog';
import Content from './componants/Blogs/Content/Content';
import Author from './componants/Blogs/Content/Author';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blogs',
        element: <Blogs />,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=10')
      },
      {
        path: '/blog/:id',
        element: <Blog />,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
      },
      {
        path: '/author',
        element: <Author></Author>,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params}`),
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />,
       
      }
    ]
  }
]);















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
