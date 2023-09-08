import datas from "../data/data.json"

function Header () {
    return (
        <div className="flex justify-center min-h-screen">
        <div className=" py-36">
                <div className="text-center p-12">
                <h1 className="text-5xl font-bold font-satoshi capitalize text-black p-6"> Who Can Benefit? </h1>
                <div className="flex items-center justify-center ">
               
                </div>
                <p className="text-center text-xl font-satoshi text-black"> Elevate your tech journey and join our dynamic community. where individuals of all 
                <br/>experience levels are welcomed and embraced </p>
              </div>
      
        <div className="container overflow-y-scroll no-scrollbar mx-auto gap-6 grid grid-cols-[400px_400px_400px_400px_400px_400px] p-12  "> 
        { datas && datas.map(({benefitDesc,membersBenefit,id}) => (
          <div key={id} className="bg-gray-100 rounded-3xl py-6 hover:bg-primary-200  hover:text-white">   
           <h1  className="text-center text-2xl font-satoshi font-bold py-4"> {membersBenefit}</h1>
           <p className="text-center font-satoshi text-xl pb-9 px-6">{benefitDesc}</p>
          </div>

        ))
      }
          </div>
          <div className="flex items-center justify-center">
          <button className=" mt-10 block rounded-lg bg-primary-200  px-12 py-3 font-satoshi font-bold text-white">    
                   <a href="#" className="">Become a member</a>
              </button>
          </div>
          
        </div>
      </div>
    
    )
}

export default Header;