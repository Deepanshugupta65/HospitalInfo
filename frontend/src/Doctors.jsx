
import React from "react";
import { NavLink } from "react-router-dom";
// import Category from "./Categories"
function Doctors({item}){
  return(

   <>
    <div className='w-1/4 m-2 shadow-lg rounded-md overflow-hidden relative'>
  <img src={item.src} alt='not' className='w-full h-40 object-cover img' />
  <div className='flex absolute w-full h-full left-0 top-0 items-center justify-center flex-col'>
    <h2 className='text-2xl font-medium'>{item.title}</h2>
    <NavLink to="/Categories">
      <button className="btn">Click here</button>
    </NavLink>
    <p className='text-sm'>Lorem data random</p>
  </div>
</div>
</>

  )
}

export default Doctors;