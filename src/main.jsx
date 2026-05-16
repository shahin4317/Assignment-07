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
import ErrorPage from './Pages/error page/ErrorPage';
import FriendsProvider from './Context/FriendContex';
import { ToastContainer } from 'react-toastify';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
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
    errorElement:<ErrorPage></ErrorPage>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <FriendsProvider>
        <RouterProvider router={router} />
        <ToastContainer></ToastContainer>

      </FriendsProvider>
      

   
    
  </StrictMode>,
)
