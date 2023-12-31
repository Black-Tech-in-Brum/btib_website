import { ReactComponent as Scribble} from "@assets/icons/scribbleJoinDiscord.svg";

function JoinDiscord() {
  return (
    <section className="flex justify-center bg-noise-gradient bg-secondary-300 bg-blend-hard-light bg-full text-neutral-100 sm:px-24 pb-2 py-32">
    
        <div className="px-0 lg:px-60">
          <h1 className="text-center text-3xl lg:text-5xl font-bold font-satoshi capitalize text-white px-6">
            Join discord!
          </h1>
          <div className="flex items-center justify-center "> 
        <Scribble/>
          </div>
         
          <p className="text-center text-lg lg:text-xl max-w-2xl mb-6 font-light lg:flex flex-col px-2 lg:px-0 ">
            <span>Join our vibrant community on Discord!</span>
            <span> the ultimate hub to stay updated on our latest news </span>
           <span> and exciting opportunities</span>
          </p>
          
          <div className="flex items-center justify-center pb-24">
          <button className=" mt-10 block rounded-lg bg-primary-200  px-12 py-3 font-satoshi font-bold text-white ">    
                   <a href="https://discord.gg/6fwRfARU4U" className="">Join Discord</a>
              </button>
          </div>
         
      </div>
    </section>
  )
}

export default JoinDiscord