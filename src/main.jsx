import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,  
} from '@tanstack/react-query'
import Root from './Components/Root/Root';
import Error from './Components/Root/Error';
import Home from './Components/Root/Home';
import About from './Components/Service/About';
import Service from './Components/Service/Service';
import Contact from './Components/Service/Contact';
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/service',
        element:<Service></Service>
      },
    ]
  },
// {
//     path: '/dashboard',
//     element: <Dashboard></Dashboard>,
//     children: [
//     {
//       path: "/dashboard",
//       element: <Dashboard></Dashboard>
//     }
//   ]
//   }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)