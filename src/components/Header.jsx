import { ReactComponent as Scribble } from "@assets/icons/scribble.svg";

// import { useState } from "react";
import datas from "../data/data.json"

function Header () {
  // const [items] = useState(data);
    return (
        <header className="flex justify-center bg-blue-600 items-center h-screen bg-noise-gradient bg-secondary-300 bg-blend-hard-light bg-full text-neutral-100 pt-12 px-6 sm:px-24 pb-2">
        <div className=" p-6 ">
                <div className="text-center p-11">
                <h1 className="text-6xl font-bold font-satoshi capitalize text-white"> Black Tech in Brum </h1>
                <div className="flex items-center justify-center">
                <Scribble className=""></Scribble>
                </div>
                <p className="text-xl font-satoshi text-white"> Empowering Black Techies in Birmingham to Innovate Lead, and Shape the Future. </p>
              </div>
      
        <div className="mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-[400px_400px_500px_400px_400px]"> 
        { datas && datas.map(({picture1,id}) => (
          <div key={id} className="">   
           <img src={picture1} className="rounded-3xl"/>
          </div>

        ))
      }
          </div>
          <div className="flex items-center justify-center">
          <button className=" mt-10 block rounded-lg bg-red-600 px-12 py-3 font-satoshi font-bold">    
                   <a href="#" className="">Learn More</a>
              </button>
          </div>
          
        </div>
      </header>
    
    )
}

export default Header;
