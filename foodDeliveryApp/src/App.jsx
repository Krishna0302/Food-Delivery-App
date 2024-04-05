import React from 'react'
import  ReactDOM  from 'react-dom/client'
import Header from './componants/Header.jsx'
import Body from './componants/Body.jsx'
import Footer from './componants/Footer.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import About from './componants/About.jsx'
import Error from './componants/Error.jsx'
import ContactUs from './componants/ContactUs.jsx'
import RestaurantMenu from './componants/RestaurantMenu.jsx'
import Profile from './componants/ProfileClass.jsx'
import ClassProfile from './componants/Profile.jsx'
import './index.css'


const App = () => {
  
    return (
      <div className='app'>
        <Header />
        <Outlet/>
        <Footer />
      </div>
    );

  };

  const appRouter = createBrowserRouter([
    {
      path: "/",     // if the routing is path then it will load element
      element: <App/>,
      errorElement: <Error/>,
      children: [

        {
          path: "/",
          element: <Body/>,
        },

        {
          path: "/about",
          element: <About/>,
          children: [
            {
              path: "profile",
              element: <Profile/>
            }
          ]
        },

        {
          path: "/contact",
          element: <ContactUs/>,
        },
        
        {
          path: "/restaurant/:id",
          element: <RestaurantMenu/>,
        },
      ]
    },
  ])


  const root =  ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider  router = {appRouter} />)

// export default App
