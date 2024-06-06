import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { MdMenu } from "react-icons/md";
import axios from "axios";

const Admin = () => {
  const [isOpen, setOpen] = useState(false);
  const [book,setBook] = useState();
  console.log(location)
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/admin/data")
      .then(res=>{
        setBook(res.data)
        console.log()
      })
      .catch(err =>{console.log(err)})
  }, [])
  
  function sidebar() {
    setOpen(!isOpen);
  }

  function totalBooks(){
  
    navigate("/all-books")
  }

  function availableBooks(){

    navigate("/available-books")
  }

  function borrowedBooks(){
 
    navigate("/borrowed-books")
  }

  function totalUsers(){
    navigate("/all-users")
  }

  return (
    <div>
      <div className="bg-gradient-to-b from-[#FFDF00] to-[#c40de4] w-full text-[#fff] h-screen">
        <div className="">          
        <Header/>
          <div className="min-w-[9rem] max-w-fit  text-[#3044AC] bg-white/80  border rounded-r-lg relative">
            <button
              className="flex   items-center font-medium text-base  gap-3 pl-2"
              onMouseEnter={sidebar}
            >
              <MdMenu /> Mr. Anuj
            </button>
            {isOpen && (
              <ul
                className="bg-inherit absolute left-0 w-full list-item child:border-b-4 child:border-transparent border text-sm font-semibold rounded-br-lg child-hover:border-b-4 child-hover:border-black child:m-2 "
                onMouseLeave={sidebar}
              >
                <li>Toatal Books</li>
                <li>Available Books</li>
                <li>Borrowed Books</li>
                <li>Users</li>
                <li>Fine Management</li>
                <li>Manage Books</li>
              </ul>
            )}
          </div>
          <div className="w-full child:flex child:items-center child:justify-center   child:min-w-[12rem]  child:max-w-[18rem] child:bg-green-500 justify-center gap-11 child:max-h-[20vh] child:min-h-[20vh] text-black flex flex-wrap font-medium text-xl  child:shadow-custom-multi child:cursor-pointer">
            <div className="flex-col " onClick={totalBooks}>
              <h1>Total Books</h1>
              {book && book.totalBooks}
            </div>

            <div className="flex-col" onClick={availableBooks}>
              <h1>Available Books</h1>
              {book && book.availableBooks}
            </div>

            <div className="flex-col" onClick={borrowedBooks}>
              <h1>Borrowed Books</h1>
              {book && book.borrowedBooks}
            </div >

            <div className="flex-col" onClick={totalUsers}>
              <h1>Total Users</h1>
              {book && book.totalUsers}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
