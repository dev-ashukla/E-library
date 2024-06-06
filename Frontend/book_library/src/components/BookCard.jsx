import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { VscBook } from "react-icons/vsc";

const BookCard = ({ book }) => {
  const color = book.availability ? "text-green-600" : "text-red-500";
  return (
    <div
      className="card-container border hover:border-b-2 
    hover:shadow-custom-multi hover:rounded-b-lg flex text-sm flex-row w-[15rem]"
    >
      <div className="mt-1.5 mx-1 ">
        <VscBook />
      </div>
      <div className="desc  flex flex-col items-right  ">
        <div className="font-bold flex ">
          <Link to={`/show-book/${book._id}`}> {book.title}</Link>
        </div>

        <div className="flex ">
          <div className="font-semibold mr-2">Author: </div> {book.author}
        </div>

        <div className="flex ">
          <div className="font-semibold mr-2">Publisher: </div> {book.publisher}
        </div>

        <div className="flex ">
          <div className="font-semibold mr-2">Genre: </div> {book.genre}
        </div>

        <div className={`flex `}>
          <div className="font-semibold mr-2">Availability: </div>{" "}
          <div className={`${color} font-semibold`}>
            {book.availability ? "Available" : "Not Available"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
