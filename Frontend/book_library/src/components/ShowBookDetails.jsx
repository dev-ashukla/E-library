import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import BookCard from "./BookCard";
import Header from "./Header"
function ShowBookDetails() {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowBookDetails");
      });
  }, [id]);
  


  return (
    <div>
      <Header/>
      <BookCard book={book} /> 
    </div>
  );
}

export default ShowBookDetails;
