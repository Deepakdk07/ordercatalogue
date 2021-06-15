// import { Table } from '@material-ui/core';
import React from 'react';
import { Chart } from "react-google-charts";
import {Dashboarddata} from './Dashboarddata';
import {Analyticsdata} from './Dashboarddata';
import Tile from './Tile';
import Table from './Table';
import { Orders } from './Dashboarddata';

const Dashboard = () => {
    return (
        <div style ={{padding:"100px"}}>
        <div style = {{display:"flex"}}>
        <Tile top = {Analyticsdata.todaysOrder} bottom = {Analyticsdata.currentWeekOrder} />
        <Tile top = {Analyticsdata.todaysOrderAmount} bottom = {Analyticsdata.currentWeekAmount} />
        <Tile top = {Analyticsdata.MTDorder} bottom = {Analyticsdata.lastMonthOrder}/>
        <Tile top = {Analyticsdata.MTDorderAmount} bottom = {Analyticsdata.lastMonthOrderAMount} />
         </div>
        <div  className={"my-pretty-chart-container"}>
        <Chart
  width={'600px'}
  height={'400px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={Dashboarddata}
  options={{
    hAxis: {
      title: 'Dates',
    },
    vAxis: {
      title: 'Orders Amount',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
      </div>

     { Orders.map((d) => <Table data = {d} /> )
      
      }
      </div>
    )
}

export default Dashboard
