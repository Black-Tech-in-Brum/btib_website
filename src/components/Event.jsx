

import datas from "../data/data.json"
function Event() {
  
  return (
 <section className="flex justify-center min-h-screen">
<div>
<div className="text-center p-12">
                <h1 className="text-5xl font-bold font-satoshi capitalize text-black p-6"> Upcoming Events</h1>
                <div className="flex items-center justify-center ">
                </div>
                <p className="text-center text-xl font-satoshi text-black"> At black tech in Brum, we host variety of engaging events throughout the year that
                <br/>are open to the general public. Join us to be part of our inclusive community!</p>
              </div>


         <div className="gap-7 grid grid-cols-3"> 
        {/* {datas && datas.map(({meetUps,eventDesc,eventTitle,eventDate,eventButton,meetUpsID}) => (
          <div key={meetUpsID} className="bg-gray-100 ">   
           <img src={meetUps} className=""/>
           <p1 className="">{eventTitle}</p1> <br/>
           <p1 className="">{eventDesc}</p1> <br/>
           <p2 className="">{eventDate}</p2><br/>
          
           <div className="flex items-center justify-center pb-24">
          <button className=" mt-10 block rounded-lg bg-primary-200  px-12 py-3 font-satoshi font-bold text-white ">    
                   <a href="#" className="">{eventButton}</a>
              </button>
          </div>

          </div>

        ))
      }    */}

{ datas && datas.map(({meetUps,eventDesc,eventTitle,eventDate,eventButton,meetUpsID}) => (
          <div key={meetUpsID}  className="bg-gray-400 ounded-2xl ">   
           <div className="">
           <img src={meetUps} className="rounded-3xl overflow-hidden"/>
           <h1 className="font-satoshi font-bold text-2xl">{eventTitle}</h1>
           
           <h2 className="font-satoshi">{eventDesc}</h2> 
           <h3 className="font-satoshi ">{eventDate}</h3>
           <div className="bg-primary-200 font-satoshi font-bold text-white rounded-lg text-center">{eventButton}</div>
           
           </div>
          </div>

        ))
      }
     </div>
          </div>
    </section>
  )
}

export default Event
