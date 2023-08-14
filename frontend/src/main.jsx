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
import AppointmentLocationPicker from './AppointmentLocationPicker.jsx'
import AppointmentPickerContainer from './AppointmentPickerContainer.jsx'
import BookingSidebar from './BookingProgress.jsx'
import Confirmation from './Confirmation.jsx'

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
          path:"/booking",
          element:<BookingSidebar/>,
          children:[
              {
                path:'/booking/categories',
                element:<AppointmentPickerContainer/>
              },
              {
                path:'/booking/location',
                element:<AppointmentLocationPicker/>
              },
              {
                path:'/booking/times',
                element:<Calendar/>
              },
              {
                path:'/booking/confirmation',
                element:<Confirmation/>
              },
              
          ]
        }
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
