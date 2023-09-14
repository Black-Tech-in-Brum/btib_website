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
        <h1 className="text-5xl font-bold font-satoshi capitalize text-black py-12 pt-24">About Us</h1>
      <div className="md:flex justify-center  sm:grid grid-cols-1 ">
      <div className="flex items-center justify-center px-8">
          <button  onClick={()=>setShow("HowIsStarted")} className=" mt-10 block rounded-3xl bg-gray-100  px-8 py-3 font-satoshi font-bold">    
                How it started...
              </button>
          </div>

          <div className="flex items-center justify-center px-8">
          <button onClick={()=>setShow("HowIsGoing")}className=" mt-10 block rounded-3xl bg-gray-100 px-8 py-3 font-satoshi font-bold">    
                  How is going...
              </button>
          </div>

          <div className="flex items-center justify-center px-8">
          <button onClick={()=>setShow("FuturePlan")}  className=" mt-10 block rounded-3xl bg-gray-100  px-8 py-3 font-satoshi font-bold">    
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
