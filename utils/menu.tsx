import { FaHome } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export const ListMenu = [{
    id:1,
    name:"All Tasks",
    logo: <FaHome color="white"></FaHome>,
    route: '/'
},{
    id:2,
    name:"Important!",
    logo: <FaListUl color="white"></FaListUl>,
    route: '/important'
},{
    id:3,
    name:"Completed!",
    logo: <FaCheck color="white"></FaCheck>,
    route: '/completed'
},{
    id:4,
    name:"Do It Now",
    logo: <FaClipboard color="white"></FaClipboard>,
    route: '/doitnow'
}]

export const logo ={
    logo:<CgProfile color='white'></CgProfile>
}