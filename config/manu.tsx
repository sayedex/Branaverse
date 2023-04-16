import {
    MdOutlineSpaceDashboard,
    MdOutlineAnalytics,
    MdOutlineIntegrationInstructions,
    MdOutlineMoreHoriz,
    MdOutlineSettings,
    MdOutlineLogout,
  } from "react-icons/md";
  import { AiFillLock } from "react-icons/ai";

  import { CgProfile } from "react-icons/cg";
  import { FaRegComments } from "react-icons/fa";
  import { BiMessageSquareDots } from "react-icons/bi";

export const Manu = [
    {
        name:"Profile",
        icon:CgProfile,
        link:"/me"
    
    },
    {
        name:"Change passowrd",
        icon:AiFillLock,
        link:"/me/changepass"
    
    }
]