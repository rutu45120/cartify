import { HiViewGridAdd } from "react-icons/hi";
import { BsBellFill } from "react-icons/bs";
import { AiOutlineShoppingCart,AiOutlineInfoCircle } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";


const navLink =[<HiViewGridAdd />,<BsBellFill />,<AiOutlineShoppingCart />,<FaCircleUser />,<AiOutlineInfoCircle />]

const NavMenu = () => {

  return (
    <div>
      <ul className="flex space-x-2 ">
    
    {
      navLink.map((navData,key)=>{
        return <li key={key} className="  text-text  text-lg
         border border-transparent hover:border hover:border-gray-500  rounded-full p-1 font-main  cursor-pointer select-none
        ">{navData}</li>
      })
    }


      </ul>
    </div>
  )
}

export default NavMenu