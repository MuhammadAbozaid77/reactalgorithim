import React, { useState } from 'react';

export default function RecieveInput({onClose}) {

  const [formData, setFormData] = useState({
    yourAge: 0,
    licens: '',
  });

    // Event handler for input changes
    const handleInputChange = (e) => {
      // Update the form data in the state
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
      // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access the form data from the state
    console.log(formData);
    // You can now send this data to your server or perform other actions
  };

  return <>
      <div className='absolute inset-0 bg-gray-800/30 flex justify-center'
        onClick={()=> onClose()}
      >
          <div className='mt-10 w-[400px] h-[250px] border p-5 rounded bg-white'
            onClick={(e) => e.stopPropagation()}
          >
              <form onSubmit={handleSubmit} >

                  <label className='text-[14px]' htmlFor=""> Your Age </label>
                  <input type="number" className='mb-5 w-[100%] h-[40px] px-2 text-[14px] border shadow rounded' 
                        name="yourAge"
                        value={formData.yourAge}
                        onChange={handleInputChange}
                  />

                  <label className='text-[14px]' htmlFor=""> Your Licens </label>
                  <br/>
                  <input type="checkbox" id="" name="licens" value="yes"/>  
                  <label className='text-[14px]' htmlFor=""> Yes </label>
                  <br/>
                  <input type="checkbox" id="" name="licens" value="no"/>   
                  <label className='text-[14px]' htmlFor=""> No </label>
                  <br/>
                  <button type='submit'  className='w-[100px] py-2 rounded shadow mt-3 bg-blue-500 text-[18px]'> Submit </button>
                  <button  className='w-[100px] py-2 rounded shadow mt-3 bg-red-700 text-[18px] ms-3'> Close </button>
              </form>

          </div>
      </div>
  </>
}
