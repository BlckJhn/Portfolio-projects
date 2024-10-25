import React from 'react'
import "./topbar.css";
import { IoSettingsSharp } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
 
export default function Topbar() {
  return (
    <div className='topBar'>
      <div className='topBarWrapper'>
        <div className='topLeft'>
          <span className='logo'>blck<span className='text'>a</span>dmin</span>
          </div>
        <div className='topRight'>
          <div className="topBarIcons1">
          <IoMdNotificationsOutline />
          <span className='topIconBadge'>2</span>
          </div>
          <div className="topBarIcons1">
          <GrLanguage />
          <span className='topIconBadge'>2</span>
          </div>
          <div className="topBarIcons1">
          <IoSettingsSharp />
          </div>
          <img src="https://www.shutterstock.com/image-photo/closeup-portrait-darkskinned-man-posing-600nw-2287424983.jpg" alt="profile" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
 