import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

import BookCard from "./BookCard";
import Header from "./Header";


 function ShowBookList() {
  const location = useLocation().pathname ;
console.log(location)
  const [books, setBooks] = useState([]);
   useEffect( () => {
    
        axios
        . get(`http://localhost:8082/api/books/${location}`)
        
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      
  }, []);

   const booklist =
    books.length === 0
      ? "there is no book record!"
      : books.map((book,k) => <BookCard book={book} key={k} />);
      console.log(books)

  return (
    <div>
    <Header/>
    <div className="flex child:mt-1  flex-wrap bg-[#3F7780] gap-11 justify-between ">{booklist}
    </div>
    </div>
  );
}

export default ShowBookList;
