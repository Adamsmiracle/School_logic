"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const data = [
  {
    name: 'Mon',
    present: 70,
    absent: 20,
  },
  {
    name: 'Tue',
    present: 60,
    absent: 25,
  },
  {
    name: 'Wed',
    present: 65,
    absent: 40,
  },
  {
    name: 'Thu',
    present: 60,
    absent: 40,
  },
  {
    name: 'Fri',
    present: 75,
    absent: 30,
  },
  
   
];


const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className=' flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20} className='cursor-pointer'/>
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20 }
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
          <Legend align='left' verticalAlign="top" wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
          <Bar 
          dataKey="present" 
          legendType='circle' 
          fill="#FAE27C"
          radius={[10, 10, 0, 0]}
          />

          <Bar 
          dataKey="absent" 
          legendType='circle' 
          fill="#C3EBFA" 
          radius={[10, 10, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart
