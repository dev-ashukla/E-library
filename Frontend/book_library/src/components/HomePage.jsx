import React from "react";
import Header from "./Header.jsx";
import Caraousel from "./Carousel.jsx";
import Genres from "./Genres.jsx";

const HomePage = () => {
  return (
    <div className="bg-[#3F7780] text-white min-h-screen">
      <Header />
      <div className=" child:mt-7">
        <div className="mx-3 relative h-[50vh]  align-bottom ">
          <div className="absolute inset-0">
            <Caraousel />
          </div>
          <div className="h-full flex mx-3 items-end">
            <div className="relative z-10 w-full text-black bg-white/50  flex flex-col items-center  ">
              <h1 className="text-2xl font-bold">
                "Discover Your Next Favorite Book on BookStack"
              </h1>
              <p className="font-semibold">
                "Explore a world of books across multiple genres and find your
                perfect read. Take our quiz to get personalized
                recommendations."
              </p>
            </div>
          </div>
        </div>
        <div id="genres" className="mx-3">
          <Genres />
        </div>

        {/* About us  */}
        <div id="about">
          <div className="child:my-4 mx-20 font-semibold">
            <h1 className="text-2xl font-bold text-center   border-b-4 ">
              About Us
            </h1>
            <p>
              <h2 className="text-xl">Welcome to BookStack!</h2>
              <br />
              <p>
                At BookStack, we believe in the power of books to transform
                lives, inspire minds, and bring people together. Our mission is
                to create a vibrant community of book lovers where everyone can
                discover, share, and enjoy their next favorite read.
              </p>
              <br />
              <h2 className="text-xl">Our Story</h2>
              <br />
              BookStack was founded by a group of passionate readers who wanted
              to make it easier for people to find and share great books. We
              realized that while there are countless books available, finding
              the right one can sometimes be a challenge. That's why we created
              a platform that not only offers a vast collection of books across
              all genres but also provides personalized recommendations to help
              you find the perfect book every time.
            </p>
          </div>
        </div>

{/* contact us */}
<div id="contactUs" className="child:mt-4 bg-[#324B4F] font-semibold">
          <h1 className="text-2xl font-bold text-center border-b-4">
            Contact Us
          </h1>
          <div className="mt-4 text-center">
            <p className="text-lg">📞 +91 12345 67890</p>
            <p className="text-lg">✉️ contact@bookstack.com</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default HomePage;
