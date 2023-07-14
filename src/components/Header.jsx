
function Header () {
    return (
        <div className="py-80">
        <div className="container m-auto px-6">
      
         <div className="lg:flex justify-between items-center">
             <div className="lg:w-6/12 lg:p-0 p-7">
                <h1 className="text-4xl font-bold leading-tight mb-5 capitalize">  Professional Tailwind theme designed for developers. </h1>
                <p className="text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec. </p>
      
                <div className="py-5">
                     <a href="#" className="text-white rounded-full py-2 px-5 text-lg font-semibold bg-yellow-600 inline-block border border-yellow-600 mr-3">Try for free</a>
                     <a href="#" className="text-black rounded-full py-2 px-5 text-lg font-semibold bg-gray-400 inline-block border hover:bg-white hover:text-black">Requist a demo</a>
                </div>
      
              </div>
            
          </div>
      
        </div>
      </div>
    
    )
}

export default Header;