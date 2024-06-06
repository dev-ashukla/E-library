import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'

// Components imports
import HomePage from "./components/HomePage"
// import CreateBook from "./components/CreateBook"
import ShowBookList from "./components/ShowBookList"
import ShowBookDetails from "./components/ShowBookDetails"
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Admin from './components/Admin'
const router = createBrowserRouter([
  
  {path: "/", element: <HomePage/>},
  {path : "/all-books", element: <ShowBookList/>},
  {path : "/available-books", element: <ShowBookList/>},
  {path : "/borrowed-books", element: <ShowBookList/>},
  {path : "/show-book/:id", element: <ShowBookDetails/>},
  {path: "/log-in", element: <LogIn/>},
  {path: "/sign-up", element: <SignUp/>},
  {path: "/admin", element: <Admin/>}

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
