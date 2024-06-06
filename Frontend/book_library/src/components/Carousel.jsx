import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import books1 from "../assets/books1.jpg";
import books2 from "../assets/books2.jpg";
import books3 from "../assets/books3.jpg";

const Caraousel = ()=>{
    return(
        <div>
             {/* Caraousel div */}
        <div>
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
            <div>
              <img
                src={books1}
                alt="image of books"
                className="min-w-full h-[50vh]"
              />
            </div>
            <div>
              <img
                src={books2}
                alt="image of books"
                className="min-w-full h-[50vh]"
              />
            </div>
            <div>
              <img
                src={books3}
                alt="image of books"
                className="min-w-full h-[50vh]"
              />
            </div>
          </Carousel>
        </div>
        </div>
    )
}

export default Caraousel;