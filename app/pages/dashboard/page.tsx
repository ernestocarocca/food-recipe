"use client";


import { ChartResult } from '@/components/chartsResult';
import SidebarDemo from '@/components/example/sidebar-demo';
import ResultMonth from '@/components/resultBox/resultMonth';
import React from 'react'

const UserDashboard = () => {
  return (
    <div className=' flex flex-row'>
      <div className=''>  <SidebarDemo /></div>
      <div className=' overflow-hidden h-screen '>   <ResultMonth />
     
      
      </div>
      <ChartResult />
    </div>
  )
}

export default UserDashboard
