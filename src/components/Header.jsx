// import { ReactComponent as Scribble } from "@assets/icons/scribble.svg";


import datas from "../data/data.json"

function Header () {

    return (
        <header className="flex justify-center bg-blue-600 items-center w-screen bg-noise-gradient bg-secondary-300 bg-blend-hard-light bg-full text-neutral-100 pt-12 pb-2">
        <div className="">
                <div className="text-center">
                <h1 className="text-6xl font-bold font-satoshi capitalize text-white"> Black Tech in Brum </h1>
                <div className="flex items-center justify-center ">
                {/* <Scribble className="w-181"/> */}
                </div>
                <p className="text-center text-3xl font-satoshi text-white"> Empowering Black Techies in Birmingham to Innovate 
                <br/>Lead, and Shape the Future. </p>
              </div>
      
        <div className="container overflow-auto py-12 py-20 gap-2 grid grid-cols-[320px_350px_400px_350px_320px] py-12 "> 
        { datas && datas.map(({picture1,id}) => (
          <div key={id} className="">   
           <img src={picture1} className="rounded-3xl overflow-hidden"/>
          </div>

        ))
      }
          </div>
          <div className="flex items-center justify-center">
          <button className=" mt-10 block rounded-lg bg-primary-200  px-12 py-3 font-satoshi font-bold">    
                   <a href="#" className="">Learn More</a>
              </button>
          </div>
          
        </div>
      </header>
    
    )
}

export default Header;
