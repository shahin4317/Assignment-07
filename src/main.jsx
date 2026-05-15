import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root/Root';
import Home from './Pages/Home/Home';
import Timeline from './Pages/TimeLine/Timeline';
import Stats from './Pages/Stats/Stats';
import CardDetails from './Components/Home/CardDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Suspense fallback={'loding'}><Home></Home></Suspense>,
        loader: () => fetch('/FriendData.json')
      },
      {
        path: "/Timeline",
        element: <Timeline></Timeline>,
      },
      {
        path: "/Stats",
        element: <Stats></Stats>,
      },
      {
        path: "/cardDetails/:id",
        Component: CardDetails,
        loader: () => fetch('/FriendData.json')
      }
    ],
    errorElement: <h4>this page no g</h4>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
