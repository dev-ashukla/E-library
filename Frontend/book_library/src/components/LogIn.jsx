import  { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const [Email_Id, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8082/api/user/log-in",{Email_Id,Password}
      );

      if (response.data.token) {
        console.log("logIn");
        console.log(response.data.token)
        navigate('/admin')
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full">
        <Header />
      </div>
      <form onSubmit={handleSubmit}>
      <div className= " bg-[#3F7780]  w-full h-screen justify justify-center items-center flex flex-col text-white">
        
        <div className="flex flex-row max-w-fit gap-10 px-5 py-5 bg-white/20   rounded-lg">    
          <div className="flex flex-col font-bold gap-2">
          <h1 className="font-bold text-xl mb-9">Login</h1>
          <label htmlFor="" className="text-sm">Email ID: </label>
          <input type="email" placeholder="abc@gmail.com" className="border-2 text-sm rounded w-[15vw]" value={Email_Id} onChange={(e)=>{
            setEmail(e.target.value)
          }} required/>
          <label htmlFor="" className="text-sm">Password: </label>
          <input type="password" placeholder="********" className="border-2 text-sm rounded w-[15vw] " value={Password} onChange={(e)=>{
           setPassword(e.target.value)
          }} required />

          <button type="submit" className="border-2 rounded-md max-w-fit mx-auto px-2 mt-4 hover:bg-white"> Login </button>
          </div>
          </div>
        
      </div>
      
      </form>
    </div>
    
  );
};

export default LogIn;
