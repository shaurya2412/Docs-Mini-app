import { FaTag } from "react-icons/fa"
import Card from "./Card"
const Foreground = () => {

  const data = [
    {
      desc: "lorem ipsum deums ue sied scbk aue sicd ujsw dua ha",
      filesize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    }
  ]




   return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full">
        <Card/>
    </div>
   )
 }

 export default Foreground
