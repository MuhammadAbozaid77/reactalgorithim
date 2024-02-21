import React, { useEffect, useState } from 'react'

export default function Test() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");


    useEffect(() => {
      
    }, [])
    
  return <>

        <div className='flex justify-center items-center flex-col'>
            <div className='my-3'>
                <label htmlFor="">Name</label>
                <input className='border mx-3 p-1'
                       type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='my-3'>
                <label htmlFor="">Phone</label>
                <input className='border mx-3 p-1'
                       type="number" name="" id="" value={phone}  onChange={(e)=>setPhone(e.target.value)} />
            </div>
        </div>

        <div className='flex justify-center items-center flex-col'>
            <div>
                Name : {name}
            </div>
            <div>
                Phone : {phone}
            </div>
        </div>
  
  </>
}
