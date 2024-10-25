import { userData } from "../../../dummyData"

import Chart from "../../charts/chart"
import FeaturedInfo from "../../featuredInfo/featuredInfo"
import WidgetLg from "../../widgetLg/widgetLg"
import WidgetSm from "../../widgetSm/widgetSm"
import "./home.css"

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey={"Active User"}/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>      
      </div>            
    </div>
  )
}
