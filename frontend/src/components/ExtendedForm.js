import React from 'react'
import { useState } from 'react'
const ExtendedForm = (props) => {
  const [crop_name, setCrop_name] = useState("");
    const [crop_area, setCrop_area] = useState("");
    const [products_used, setProducts_used] = useState("");


    const handleName = (e) => {
        e.preventDefault();
        setCrop_name(e.target.value);
    }
    const handleArea = (e) => { 
        e.preventDefault();
        setCrop_area(e.target.value);
    }
    const handleProducts = (e) => {
        e.preventDefault();
        setProducts_used(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setCropData((prev) => [...prev, {crop_name: crop_name, crop_area: crop_area, products_used: products_used}]);
        // fetch('http://localhost:4000/data', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({name: props.name, number: props.number, crop_name: crop_name, crop_area: crop_area, products_used: products_used})
        // }).then(() => {
        //     console.log('Data sent');
        // }).then(() => {
        //     window.location.reload();
        // });
    }
  return (
    <div>
         <form className='flex flex-col border-solid border-2' onSubmit={()=>{}}>
            <div className='flex flex-row m-4'>
            <label className='text-lg'>Crop Name:</label>
            <input className='border-2 border-gray-400 rounded-md ml-10 px-4' type='text' placeholder='Enter Crop Name' value={crop_name} onChange={handleName}/>
            </div>
            <div className='flex flex-row m-4'>
            <label className='text-lg'>Crop Area:</label>
            <input className='border-2 border-gray-400 rounded-md ml-10 px-4' type='text' placeholder='Enter Crop Area' value={crop_area} onChange={handleArea}/>
            </div>    
            <div className='flex flex-row m-4'>
            <label className='text-lg'>Spray Products:</label>
            <input className='border-2 border-gray-400 rounded-md ml-10 px-4' type='text' placeholder='Enter name of Spray products used' value={products_used} onChange={handleProducts}/>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20 ml-50' type='submit' onClick={handleSubmit}>Add data</button>
            </div>   
        </form>

    </div>
  )
}

export default ExtendedForm