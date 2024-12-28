import { IoIosCloseCircle } from "react-icons/io";
import { FaFileArchive } from "react-icons/fa";
import { TbDownload } from "react-icons/tb";
import {motion} from "framer-motion";


const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} className='w-60 h-[300px] rounded-[60px] bg-zinc-900 mt-20 ml-20 ' >
         <div className=" ml-10 pt-14 text-white text flex justify-between place-content-center">
          <FaFileArchive size={20} /></div> 
          <div className='text-white px-8 font-semibold pt-4'>{data.desc}</div>
          <div className='text-white px-2 flex mt-12 ml-6 '>{data.filesize}<div className='ml-28 mt-1'>
            
            {data.close ? <IoIosCloseCircle size={20} /> : <TbDownload />
 }
</div>
</div>
{/* tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}, */}

{
  data.tag.isOpen ?   (<button className="bg-green-500 text-white font-semibold  px-20 mt-6 rounded-b-full hover:bg-green-400">
  {data.tag.tagTitle}
</button>
    ) : <button className="bg-blue-500 text-white font-semibold  px-20 mt-6 rounded-b-full hover:bg-blue-500">
    {data.tag.tagTitle}
  </button>
}
</motion.div>
  )
}

export default Card
