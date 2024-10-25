import React from 'react'
import "./widgetLg.css"

export default function WidgetLg() {
  const Button =({type}) =>{
    return <button className={"widgetLgButton "+type}>{type}</button>
  };
  return (
    <div className='widgetLg'>
     <h3 className="widgetLgTitle">Latest Transactions</h3>
     <table className="widgetLgTable"><tr className="widgetLgTr">
      <th className="widgetLgTh">Customer</th>
      <th className="widgetLgTh">Date</th>
      <th className="widgetLgTh">Amount</th>
      <th className="widgetLgTh">Status</th>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="User Pic"  className='widgetLgImg'/>
          <span className="widgetLgName">Susan Carol</span>
        </td>
        <td className="widgetLgDate">2 June 2023</td>
        <td className="widgetLgAmount">$2245.23</td>
        <td className="widgetLgStatus">
          <Button type="Pending"/>
        </td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Pic" className='widgetLgImg'/>
          <span className="widgetLgName">Tunmise Thompson</span>
        </td>
        <td className="widgetLgDate">2 Apr 2022</td>
        <td className="widgetLgAmount">$22,405.23</td>
        <td className="widgetLgStatus">
          <Button type="Approved"/>
        </td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Pic" className='widgetLgImg' />
          <span className="widgetLgName">Segun Thomas</span>
        </td>
        <td className="widgetLgDate">2 December 2021</td>
        <td className="widgetLgAmount">$424,500.23</td>
        <td className="widgetLgStatus">
          <Button type="Declined"/>
        </td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Pic" className='widgetLgImg' />
          <span className="widgetLgName">Adeniji Wura</span>
        </td>
        <td className="widgetLgDate">2 Jan 2024</td>
        <td className="widgetLgAmount">$125,098,245.23</td>
        <td className="widgetLgStatus">
          <Button type="Pending"/>
        </td>
      </tr>
      </table>
    </div>
  )
}
