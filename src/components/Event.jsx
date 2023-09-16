
import datas from "../data/eventdata.json"
function Event() {
  
  return (

<div className="flex justify-center min-h-screen">
<div className=" py-18">
        <div className="text-center p-12">
        <h1 className="text-3xl lg:text-5xl font-bold font-satoshi capitalize text-black p-6"> Upcoming Events </h1>
        <div className="flex items-center justify-center ">
       
        </div>
        <p className="text-center text-xl font-satoshi text-black"> At black tech in Brum, we host variety of engaging events throughout the year that
        <br/>are open to the general public. Join us to be part of our inclusive community!</p>
      </div>

<div className=" gap-6 md:grid-cols-[400px_400px_400px] sm:grid grid-cols-1 p-12 "> 
{ datas &&
 datas.map(({meetUps,id, eventTitle,eventDesc,eventDate,eventButton}) => (
  <div key={id} className="mt-10 lg:mt-0 bg-gray-100 rounded-3xl ">  
  <img src={meetUps} className="rounded-xl"/> 
   <h1  className="text-center text-xl font-satoshi font-bold py-2"> {eventTitle} </h1>
   <h2 className="text-center text-lg font-satoshi font-bold ">{eventDesc}</h2>
   <h3  className="text-center text-lg font-satoshi ">{eventDate}</h3>
   { eventButton == "More details" ?
 <div className="flex items-center justify-center pb-10">
 <button className=" mt-10 block rounded-lg bg-primary-200  px-12 py-3 font-satoshi font-bold text-white">    
         {eventButton}
     </button>
 </div> :   <div className="flex items-center justify-center pb-10">
 <button className=" mt-10 block rounded-lg bg-gray-400  px-12 py-3 font-satoshi font-bold text-white">    
         {eventButton}
     </button>
 </div> 
   }
  
  </div>


))
}
  </div>

  
</div>
</div>

 )
 }

export default Event
