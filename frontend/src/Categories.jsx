import React, { useEffect , useState } from 'react'
import axios from "axios"
function Categories() {
  const [info , setInfo] = useState([])
  useEffect(()=>{
    axios.get('/api/data')
    .then((res)=>{
      setInfo(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  return (
    <>
    <div className="text-center">
  <h1 className="text-4xl font-bold">Information</h1>
</div>
    {info.map((doc) => (
      <div key={doc.id}>
        {/* <h3>{doc.name}</h3> */}
        <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <img className="object-cover w-full h-45" src={doc.image} alt='not' />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{doc.name}</h2>
        <p className="text-gray-700 mb-2">Fee: ${doc.fee}</p>
        <p className="text-gray-700">{doc.address}</p>
      </div>
    </div>

      </div>
    ))}
  </>
  )
}

export default Categories