import { useRef } from "react"
import Card from "./Card"
const Foreground = () => {

  const ref = useRef(null); 

  const data = [
    {
      desc: "lorem ipsum deums ue sied scbk aue sicd ujsw dua ha",
      filesize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},

    }
  ]




   return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full">
     {data.map((item, index)=>(
     <Card data={item}  reference={ref}/>

     ))}
    </div>  
   )
 }

 export default Foreground
