import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// import collections
import Root from './Root.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from './Home.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        // loader: fetch("booksData.json"),
        element: <Home></Home>
      },
      {
        path:"/random1",
        element: <p>random1</p>
      },
      {
        path:"/random2",
        element: <p>random2</p>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
