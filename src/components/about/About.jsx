import { ReactComponent as Scribble} from "@assets/icons/scribbleAbout.svg";
import datas from "../../data/data.json"
// import { useNavigate} from "react-router-dom";
import { useState } from "react";
import HowIsGoing from "./HowIsGoing";

import FuturePlan from "./FuturePlan";
function About() {


  const [isshow, setShow] = useState("HowIsStarted");


  return (
    <section className="bg-white w-screen">
      <div className="py-18">
      <div className="text-center">
        <h1 className="text-3xl lg:text-5xl font-bold font-satoshi capitalize text-black py-12 pt-24">About Us</h1>
      <div className="md:flex justify-center  sm:grid grid-cols-1 ">
      <div className="flex items-center justify-center px-8">
          <button  onClick={()=>setShow("HowIsStarted")} className={`mt-10 block rounded-3xl  px-8 py-3 font-satoshi font-bold ${isshow === 'HowIsStarted' ? 'bg-blue-600 text-white':'bg-gray-100'}`}>    
                How it started...
              </button>
          </div>

          <div className="flex items-center justify-center px-8">
          <button onClick={()=>setShow("HowIsGoing")}className={`mt-10 block rounded-3xl  px-8 py-3 font-satoshi font-bold ${isshow === 'HowIsGoing' ? 'bg-blue-500 text-white':'bg-gray-100'}`}>    
                  How is going...
              </button>
          </div>

          <div className="flex items-center justify-center px-8">
          <button onClick={()=>setShow("FuturePlan")}  className={`mt-10 block rounded-3xl  px-8 py-3 font-satoshi font-bold ${isshow === 'FuturePlan' ? 'bg-primary-200 text-white':'bg-gray-100'}`}>    
                  Future plan...
              </button>
          </div>


      </div>
      </div>
     
     <div>
      { isshow == "HowIsStarted" &&
       <div className="flex justify-center py-10 md:px-40 ">
        <div className="bg-gray-100 rounded-3xl p-20">
        <h1 className="text-align-left md:text-4xl font-satoshi font-bold py-4 sm:text-3xl ">How is started...</h1>
        <Scribble/>
          {/* <svg className="w-1/3 lg:w-auto lg:h-[23px]" viewBox="0 0 181 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.10376 8.59143C24.4553 5.80379 109.568 -0.928002 179.549 2.70241C143.325 3.8979 96.1466 6.05548 65.9637 13.3088" stroke="#2235b5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> */}
       
      { datas && datas.map(({aboutImgOne, id, aboutImgDescOne}) => (
        <div key={id} className="md:grid-cols-2 sm:grid grid-cols-1 gap-10 rounded-3xl justify-items-center ">
          
       <p1 className="lg:py-auto text-align-left font-satoshi md:text-xl text-wrap sm:text-xl">{aboutImgDescOne}</p1>
       <img src={aboutImgOne} className="mt-10 lg:mt-0 rounded-3xl"/>
        </div>
      ))}
      </div>
      </div> 
      } 
        {isshow == "HowIsGoing" && <HowIsGoing/>}
        {isshow == "FuturePlan" && <FuturePlan/>}

      </div>
        </div>
    </section>
  )
}

export default About
