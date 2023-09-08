import datas from "../../data/data.json"
// import { useNavigate} from "react-router-dom";
import { useState } from "react";
import HowIsGoing from "./HowIsGoing";

import FuturePlan from "./FuturePlan";
function About() {


  const [isshow, setShow] = useState(true);
  // const [showTwo, setShowTwo] = useState(false);
  // const [showFuturePlan, setShowFuturePlan] = useState(false);
  
  // const isVisibleComponent = (names) => {
  //   setShowOne(names == "true" );
  //   setShowTwo(names= "false" );
  //   setShowFuturePlan(names == "false" )
  // }

  return (
    <section className="bg-white w-screen">
      <div className="grid grid-cols-3 ">
      <div className="flex items-center justify-center">
          <button  onClick={()=>setShow(true)} className=" mt-10 block rounded-lg bg-gray-100  px-12 py-3 font-satoshi font-bold">    
                How it started...
              </button>
          </div>

          <div className="flex items-center justify-center">
          <button onClick={()=>setShow(false)}className=" mt-10 block rounded-lg bg-gray-100 px-12 py-3 font-satoshi font-bold">    
                  How is going...
              </button>
          </div>

          <div className="flex items-center justify-center">
          <button onClick={()=>setShow(false)}  className=" mt-10 block rounded-lg bg-gray-100  px-12 py-3 font-satoshi font-bold">    
                  Future plan...
              </button>
          </div>


      </div>
      { isshow ?
       <div className="flex justify-center py-36 px-40">
        <div className="bg-gray-100 rounded-3xl p-20">
        <h1 className="text-align-left text-4xl font-satoshi font-bold py-4">How is started...</h1>
      { datas && datas.map(({aboutImgOne, id, aboutImgDescOne}) => (
        <div key={id} className="grid grid-cols-2 gap-10 rounded-3xl justify-items-center ">
          
       <p1 className="text-align-left font-satoshi text-2xl text-wrap">{aboutImgDescOne}</p1>
       <img src={aboutImgOne} className="rounded-3xl"/>
        </div>
      ))}
      </div>
      </div> : (<HowIsGoing/>)
      } 
        {isshow ? <FuturePlan/>: null}

    </section>
  )
}

export default About
