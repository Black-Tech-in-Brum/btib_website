import { ReactComponent as Scribble } from "@assets/icons/scribble.svg";

// import { useState } from "react";
import datas from "../data/data.json"

function Header () {
  // const [items] = useState(data);
    return (
        <header className="flex justify-center bg-blue-600 items-center h-screen bg-noise-gradient bg-secondary-300 bg-blend-hard-light bg-full text-neutral-100 pt-12 px-6 sm:px-24 pb-2">
        <div className=" p-6 ">
                <div className="py-7 text-center">
                <h1 className="text-6xl font-bold font-satoshi capitalize text-white "> Black Tech in Brum </h1>
                <Scribble className=" h-[0.875rem] "  aria-hidden="true" ></Scribble>
                <p className="text-xl font-satoshi text-white"> Empowering Black Techies in Birmingham to Innovate Lead, and Shape the Future. </p>
              </div>
      
        <div className="grid grid-cols-5 gap-4"> 
        { datas && datas.map(({picture1,id}) => (
          <div key={id} className="w-full h-auto mt-10 block rounded-lg ">    
           <img src={picture1} className=""/>
          </div>

        ))
      }
          </div>
          <button className=" mt-10 block rounded-lg bg-red-600 px-4 py-3 font-satoshi font-bold">    
                   <a href="#" className="">Learn More</a>
              </button>
        </div>
      </header>
    
    )
}

export default Header;
