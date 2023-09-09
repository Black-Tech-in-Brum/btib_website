import datas from "../../data/data.json"

function HowIsGoing() {


  return (
    <section className="bg-white w-screen">

      <div className="flex justify-center py-10 md:px-40 ">
        <div className="bg-gray-100 rounded-3xl p-20">
        <h1 className="text-align-left md:text-4xl font-satoshi font-bold py-4 sm:text-2xl ">How is Going...</h1>
      { datas && datas.map(({aboutImgTwo, id, aboutImgDescTwo}) => (
        <div key={id} className="md:grid-cols-2 sm:grid grid-cols-1 gap-10 rounded-3xl justify-items-center ">
          
       <p1 className="text-align-left font-satoshi md:text-xl text-wrap sm:text-sm">{aboutImgDescTwo}</p1>
       <img src={aboutImgTwo} className="md:rounded-3xl sm:rounded:2xl"/>
        </div>
      ))}
      </div>
      </div>
    </section>
  )
}

export default HowIsGoing;
