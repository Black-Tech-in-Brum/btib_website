import { ReactComponent as Scribble } from "@assets/icons/scribble.svg";

import datas from "../data/data.json"

function Header () {
    return (
        <header className="flex justify-center bg-blue-600 items-center h-screen bg-noise-gradient bg-secondary-300 bg-blend-hard-light bg-full text-neutral-100 px-6">
        <div className=" p-6 ">
                <div className="text-center p-11">
                <h1 className="text-6xl font-bold font-satoshi capitalize text-white"> Black Tech in Brum </h1>
                <div className="flex items-center justify-center ">
                <Scribble className="w-80"/>
                </div>
                <p className="text-center text-3xl font-satoshi text-white"> Empowering Black Techies in Birmingham to Innovate 
                <br/>Lead, and Shape the Future. </p>
              </div>
      
        <div className=" container overflow-auto gap-3 grid grid-cols-[400px_400px_500px_400px_400px] p-12 "> 
        { datas && datas.map(({picture1,id}) => (
          <div key={id} className="">   
           <img src={picture1} className="rounded-3xl max-w-screen mx-auto h-auto"/>
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
