import { IoIosCloseCircle } from "react-icons/io";
import { FaFileArchive } from "react-icons/fa";

const Card = () => {
  return (
    <div className='w-60 h-[300px] rounded-[60px] bg-zinc-900 mt-20 ml-20 ' >
         <div className=" ml-10 pt-14 text-white text flex justify-between place-content-center">
          <FaFileArchive size={20} /></div> 
          <div className='text-white px-8 font-semibold pt-4'>This is the Background color of the card that will be displayed</div>
          <div className='text-white px-2 flex mt-12 ml-6 '>.9mb <div className='ml-28 mt-1'> <IoIosCloseCircle size={20} />
</div>
          </div><button className="bg-green-500 text-white font-semibold  px-20 mt-6 rounded-b-full hover:bg-green-400">
  Download Now
</button>
    </div>
                

  )
}

export default Card
