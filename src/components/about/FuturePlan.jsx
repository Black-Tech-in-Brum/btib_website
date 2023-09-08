import datas from "../../data/data.json"

function FuturePlan() {
  return (
    <section className="bg-white w-screen">

      <div className="flex justify-center py-36 px-40">
        <div className="bg-gray-100 rounded-3xl p-20">
        <h1 className="text-align-left text-4xl font-satoshi font-bold py-4">Future Plan...</h1>
      { datas && datas.map(({aboutImgThree, id, aboutImgDescThree}) => (
        <div key={id} className="grid grid-cols-2 gap-10 rounded-3xl justify-items-center ">
          
       <p1 className="text-align-left font-satoshi text-2xl text-wrap">{aboutImgDescThree}</p1>
       <img src={aboutImgThree} className="rounded-3xl"/>
        </div>
      ))}
      </div>
      </div>
    </section>
  )
}

export default FuturePlan;
