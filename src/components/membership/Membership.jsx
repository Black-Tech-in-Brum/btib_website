import datas from "../../data/data.json"

function Header () {
    return (
        <div className="flex justify-center min-h-screen" id="whoCanBenefit">
        <div className=" py-18">
                <div className="text-center p-12">
                <h1 className="text-3xl lg:text-5xl font-bold font-satoshi capitalize text-black p-2"> Who Can Benefit? </h1>
                <div className="flex items-center justify-center ">
               
                </div>
                <p className="text-center text-xl font-satoshi text-black"> Elevate your tech journey and join our dynamic community. where individuals of all 
                <br/>experience levels are welcomed and embraced </p>
              </div>
      
        <div className="container overflow-y-scroll no-scrollbar mx-auto md:gap-6 md:grid-cols-[400px_400px_400px_400px_400px_400px] sm:grid grid-cols-1  p-12 sm:gap-y-7 "> 
        { datas && datas.map(({benefitDesc,membersBenefit,id}) => (
          <div key={id} className="mt-10 lg:mt-0 bg-gray-100 rounded-3xl py-6 hover:bg-primary-200  hover:text-white">   
           <h1  className="text-center text-xl font-satoshi font-bold py-4"> {membersBenefit}</h1>
           <p className="text-center font-satoshi text-xl pb-9 px-6">{benefitDesc}</p>
          </div>

        ))
      }
          </div>
          <div className=" mb-10 lg:mb-0 flex items-center justify-center sm:pb-12">
          <button className=" mt-10 block rounded-lg bg-primary-200  px-12 py-3 font-satoshi font-bold text-white">    
                   <a href="https://docs.google.com/forms/d/e/1FAIpQLSfihXvQunDbCUG0JnA73rl7EF5VTAUkG5JZpO_UtcYL9Lvz6g/viewform?usp=send_form" className="">Become a member</a>
              </button>
          </div>
          
        </div>
      </div>
    
    )
}

export default Header;