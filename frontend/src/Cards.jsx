import React from 'react'
import { ApiCategory } from './apifolder/DoctorInfo'
import Doctors from './Doctors'
// import { NavLink } from "react-router-dom";

function Cards() {
  return (
     <div className='flex justify-between items-center p-5 mt-4'>
        {
            ApiCategory.map((gallery,index)=>{
                return <Doctors item={gallery} key={index}/>
            })
        }
     </div>
  )
}

export default Cards