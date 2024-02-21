import React from 'react';

export default function Recommend({onClose}) {
    
  return <>
        <div className='absolute inset-0 bg-gray-800/30 flex justify-center'
            onClick={()=> onClose()}
        >
            <div className=' mt-10 w-[400px] h-[150px] border p-5 rounded bg-white'
                onClick={(e) => e.stopPropagation()}
            >
                <h1 className='mb-10 text-[20px]'> Are You Have Any Recommendation ? </h1>
                <div className='flex gap-5'>
                    <button className='border py-2 text-white font-bold rounded-[5px] text-[16px] w-[100px] shadow bg-blue-400'>  
                        Yes
                    </button>
                    <button className='border py-2 text-white font-bold rounded-[5px] text-[16px] w-[100px] shadow bg-red-600'>  
                        No
                    </button>
                </div>

            </div>
        </div>
  </>
}
