import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonBoundingBox } from "react-icons/bs";
import logo from "../assets/logo.png"
const Header = () => {
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate("/");
  };

  const [isOpen, setOpen] = useState(false);
  var active;
  const Hamburger = () => {
    setOpen(!isOpen);
  };

  const options = [
    ["Log In", "/log-in"],
    ["Sign Up", "/sign-up"]
  ];

  const menus =[
    ["Genres", "#genres"],
    ["About Us", "#about"],
    ["Contact Us", "#contactUs"]
  ]

  return (
    <div className="bg-">
      <div className=" bg-[#1F2C3D] flex flex-row  justify-center font-bold text-2xl  px-6 text-white">
        <div className="absolute left-3">
          <button 
            onClick={HandleClick}
            className="button  italic font-serif"
          >
            <img src={logo} className="w-auto absolute h-[48px]  " alt="" />
            <div className="relative py-2"> BookStack</div>
          </button>

        </div>
        <div className="flex flex-row py-3  font-medium text-base w-[30vw] justify-between ">
          {menus.map((menu,index) =>(
            <div key={index} >
              
            <a href={menu[1]}>{menu[0]}</a>
            </div>
          ))}
        </div>
        <div className="absolute right-1 top-3">
          <button onMouseEnter={Hamburger}
            className={"button mx-7  text-2xl" }
          >
            <BsPersonBoundingBox />
          </button>
          {isOpen && (
            <ul onMouseLeave={Hamburger} className="  relative z-10 right-3 mt-2  ">
              {options.map((option, index) => (
                <li
                  className=" px-1 bg-inherit cursor-pointer border rounded-lg hover:border-b-2 mt-1 text-center hover:shadow-custom-multi bg-[#1F2C3D] hover:border-black text-sm hover:bg-[#1F2C3D]"
                  key={index}
                >
                  <Link to={option[1]}>{option[0]}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
