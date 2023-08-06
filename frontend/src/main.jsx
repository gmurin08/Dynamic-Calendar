import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx'
import BookingLanding from './BookingLanding'
import './index.css'
import Calendar from './Calendar.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
      path: "/landing",
      element: <BookingLanding/>,
      },
      {
        path: "landing/schedule",
        element: <Calendar/>
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
