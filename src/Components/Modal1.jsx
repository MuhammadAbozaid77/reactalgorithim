import React, { useState } from 'react'
import RecieveInput from './RecieveInput';
import Recommend from './Recommend';

export default function Modal1() {
    const [showInput, setShowInput] = useState(false);
    const [showRecommend, setShowRecommend] = useState(false)

  return <>
    <div>
        <button className='border py-1 px-5 rounded text-[14px] shadow'
            onClick={()=>setShowInput(true)}
        > 
        Start 
        </button>
    </div>

    {
        showInput && (
            <RecieveInput  
                onClose={()=>setShowInput(false)}
            />
        )
    }
    {
        showRecommend && (
            <Recommend  
                onClose={()=>setShowRecommend(false)}
            />
        )
    }
  </>
}
