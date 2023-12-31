import { ReactComponent as Scribble} from "@assets/icons/scribbleFuturePlan.svg";
import datas from "../../data/data.json"

function FuturePlan() {
  return (
    <section className="">

      <div className="flex justify-center py-10 md:px-40 ">
        <div className="bg-gray-100 rounded-3xl p-20">
        <h1 className="text-align-left md:text-4xl font-satoshi font-bold sm:text-3xl ">Future Plan...</h1>
       <Scribble className="w-1/3 lg:w-auto lg:h-[23px] "/>
        { datas && datas.map(({aboutImgThree, id, aboutImgDescThree}) => (
        <div key={id} className="md:grid-cols-2 sm:grid grid-cols-1 gap-10 rounded-3xl justify-items-center ">
          
       <p1 className="  lg:py-auto text-align-left font-satoshi md:text-xl text-wrap sm:text-xl">{aboutImgDescThree}</p1>
       <img src={aboutImgThree} className="mt-10 lg:mt-0 rounded-3xl"/>
        </div>
      ))}
      </div>
      </div>
    </section>
  )
}

export default FuturePlan;
