import React from 'react'
import "./featuredInfo.css"
import { FaArrowDown,FaArrowUp } from "react-icons/fa";

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
           <span className="featuredMoney">$4,342,990</span>
           <span className="featuredMoneyRate">-11.4 <FaArrowDown className='featureIconNegative'/></span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
           <span className="featuredMoney">$119,990</span>
           <span className="featuredMoneyRate">+1.4 <FaArrowUp className='featureIconPositive'/></span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
           <span className="featuredMoney">$5,456,990</span>
           <span className="featuredMoneyRate">+9.4 <FaArrowUp className='featureIconPositive'/> </span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
    </div>
  )
}
