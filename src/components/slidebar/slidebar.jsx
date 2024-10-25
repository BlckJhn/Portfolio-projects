import "./slidebar.css"
import { MdOutlineLineStyle,MdOutlineTimeline,MdOutlineBarChart, MdOutlineFeedback, MdReport } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { IoIosTrendingUp,IoMdAnalytics } from "react-icons/io";

import { GrTransaction } from "react-icons/gr";
import { AiOutlineProduct } from "react-icons/ai";
import { FaRegFolder,FaRegUser } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";


export default function Slidebar() {
  return (
    <div className="slidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                   <MdOutlineLineStyle className="sidebarIcon"/> Home 
                </li>
                <li className="sidebarListItem">
                <IoMdAnalytics className="sidebarIcon" />Analytics
                </li>
                <li className="sidebarListItem">
                <IoIosTrendingUp className="sidebarIcon" /> Sales
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem ">
                   <FaRegUser className="sidebarIcon"/> Users
                </li>
                <li className="sidebarListItem">
                <AiOutlineProduct  className="sidebarIcon" />Products
                </li>
                <li className="sidebarListItem">
                < GrTransaction className="sidebarIcon" />Transactions
                </li>
                <li className="sidebarListItem">
                <MdOutlineBarChart className="sidebarIcon" />Reports
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem ">
                   <IoMailOutline className="sidebarIcon"/> Mail
                </li>
                <li className="sidebarListItem">
                <MdOutlineFeedback  className="sidebarIcon" />Feedbacks
                </li>
                <li className="sidebarListItem">
                <TiMessages className="sidebarIcon" /> Messages
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem ">
                   <FaRegFolder className="sidebarIcon"/> Manage
                </li>
                <li className="sidebarListItem">
                <MdOutlineTimeline className="sidebarIcon" />Analytics
                </li>
                <li className="sidebarListItem">
                <MdReport className="sidebarIcon" /> Reports
                </li>
            </ul>
        </div>
        
      </div>
    </div>
  )
}
