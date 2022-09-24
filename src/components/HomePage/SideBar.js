import { IconBase } from "react-icons"
import { FaFire, FaFireAlt, FaPoo } from 'react-icons/fa'
import '../../index.css'
import {BsPlus, BsFillLightningFill} from 'react-icons/bs'
export const SideBar = () => {

    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-600 text-white shadow-lg">
            
            <SideBarIcon icon={<BsPlus size="28" />} text="Hola" />
            <SideBarIcon icon={<FaFire size="28" />} />
            <SideBarIcon icon={<FaPoo size="28" />} />
            <SideBarIcon icon={<BsFillLightningFill size="20" />} />
            <SideBarIcon icon={<FaFire size="28" />} />


        </div>
    )
}

const SideBarIcon = ({ icon, text = 'toolTip' }) => {

    return (

        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )



}