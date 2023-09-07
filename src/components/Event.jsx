
import datas from "../data/data.json"
function Event() {
  
  return (
    <section className="flex justify-center items-center w-screen  bg-full text-neutral-100 pt-12 pb-2">
<div>
<div className="text-center">
                <h1 className="text-6xl font-bold font-satoshi capitalize text-black"> Upcoming Events</h1>
                <div className="flex items-center justify-center ">
                </div>
                <p className="text-center text-3xl font-satoshi text-black"> At black tech in Brum, we host variety of engaging events throughout the year that
                <br/>are open to the general public. Join us to be part of our inclusive community!</p>
              </div>
         <div className="gap-5 grid grid-cols-[300px_300px_300px] "> 
        { datas && datas.map(({event,eventDesc,eventTitle,eventDate,id}) => (
          <div key={id} className="">   
           <img src={event} className="rounded-3xl bg-gray-100"/>
           <p1 className="text-black">{eventTitle}</p1>
           <p1 className="text-black">{eventDesc}</p1>
           <p2 className="text-black">{eventDate}</p2>
           <div className="flex items-center justify-center">
          <button>    
            <a href="#" className="text-black">More Details</a>
          </button>
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
