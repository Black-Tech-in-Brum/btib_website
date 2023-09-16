import { ReactComponent as Scribble} from "@assets/icons/scribbleHeader.svg";


import datas from "../data/data.json"

function Header () {

    return (
        <header className="flex justify-center bg-blue-600 items-center w-auto lg:w-screen bg-noise-gradient bg-secondary-300 bg-blend-hard-light bg-full text-neutral-100 pt-12 pb-2">
        <div className="">
                <div className="text-center">
                <h1 className="text-3xl lg:text-6xl font-bold font-satoshi capitalize text-white"> Black Tech in Brum </h1>
                <div className="flex items-center justify-center ">
                 <Scribble/>
                  {/* <svg className="w-2/3 lg:w-auto lg:h-[45px]" viewBox="0 0 181 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.10376 8.59143C24.4553 5.80379 109.568 -0.928002 179.549 2.70241C143.325 3.8979 96.1466 6.05548 65.9637 13.3088" stroke="#FBFDFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> */}

          
                </div>
                <p className="text-center  text-lg lg:text-3xl font-satoshi text-white lg:flex flex-col px-2 lg:px-0"><span>Empowering Black Techies in Birmingham to Innovate</span> 
                <span>Lead, and Shape the Future.</span></p>
                
              </div>
      
        <div className=" overflow-auto md:container md:overflow-auto py-20 gap-2 lg:grid lg:grid-cols-[320px_350px_400px_350px_320px] flex justify-center "> 
        { datas && datas.map(({picture1,id}) => (
          <div key={id} className={parseInt(id)=== 102 ? "": "hidden md:block"}>   
           <img src={picture1} className=" rounded-3xl overflow-hidden w-96 px-4 lg:px-0"/>
          </div>

        ))
      }
          </div>
          <div className="flex items-center justify-center py-12">
          <button className=" mt-10 block rounded-lg bg-primary-200  px-12 py-3 font-satoshi font-bold ">    
                   <a href="#" className="">Learn More</a>
              </button>
          </div>
          
        </div>
      </header>
    
    )
}

export default Header;
