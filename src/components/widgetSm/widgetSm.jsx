import React from 'react'
import "./widgetSm.css";
import { FaEye } from "react-icons/fa";

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle"> New Joined Members</span>
        <ul className='widgetSmList'>
        <li  className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile pic" className='widgetSmImg' />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> Jackson Cole</span>
            <span className="widgetSmUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <FaEye  className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li  className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='widgetSmImg' />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> Emmanuel Iwok</span>
            <span className="widgetSmUserTitle">Database Analyst</span>
          </div>
          <button className="widgetSmButton">
            <FaEye className='widgetSmIcon'/>
            Display
          </button>
        </li>
 
        <li  className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='widgetSmImg' />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> Omolola Shade</span>
            <span className="widgetSmUserTitle">Criminal Analyst</span>
          </div>
          <button className="widgetSmButton">
            <FaEye className='widgetSmIcon'/>
            Display
          </button>
        </li>
        
        <li  className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='widgetSmImg' />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> Ajala John</span>
            <span className="widgetSmUserTitle">Forex Analyst</span>
          </div>
          <button className="widgetSmButton">
            <FaEye className='widgetSmIcon'/>
            Display
          </button>
        </li>
       </ul>                
    </div>
  );
}
  