import React, { useEffect } from 'react'
import ExtendedForm from './ExtendedForm'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'
import { AiFillMinusCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const Form = () => {
    const [num, setNum] = useState(1);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [cropData, setCropData] = useState([]);
    const navigate= useNavigate();

    const handleSeeResults = () => {
        navigate('/result');    
    }


    const handleplus = () => {
        setNum(num+1);
    }
    const handleminus = () => {
        if(num>1){
            setNum(num-1);
        }
    }
    

    const handlename = (e) => {
        e.preventDefault();
        setName(e.target.value);
        
    }
    const handlenumber = (e) => {
        e.preventDefault();
        setNumber(e.target.value);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cropData);
        fetch('http://localhost:4000/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name, number: number, cropData: cropData})
        }).then(() => {
            console.log('Data sent');
        }).then(() => {
            window.location.reload();
        });
    }
  return (
    <div>
        <h1 className='text-3xl'>Farmer's Details Form</h1>
        <form className='flex flex-col' onSubmit={()=>{}}>
            <div className='flex flex-row m-4'>
            <label className='text-lg'>Farmer's Name:</label>
            <input className='border-2 border-gray-400 rounded-md ml-10 px-4' type='text' placeholder='Enter Farmer Name' onChange={handlename} value={name}/>
            </div>
            <div className='flex flex-row m-4'>
            <label className='text-lg'>Farmer's Contact Number:</label>
            <input className='border-2 border-gray-400 rounded-md ml-10 px-4' type='text' placeholder='Enter Contact Number' value={number} onChange={handlenumber}/>
            </div>    
            <h2 className='text-3xl'>Farmer Detail Form</h2>
            <div className='flex flex-row m-4'>
                {Array.from({length: num}, (_, i) => (
                    <ExtendedForm key={i} name={name} number={number} setCropData={setCropData} />
                ))}
            <AiOutlinePlus className='h-5 w-5' onClick={handleplus}/>
            <AiFillMinusCircle className='h-6 w-6' onClick={handleminus}/>
            
            </div>

            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20 mx-auto my-2"
            onClick={handleSubmit}
            >
            Submit
            </button>
         
        </form>

        <button
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20 mx-auto my-2"
  onClick={handleSeeResults}
>
  Result
</button>

    </div>
  )
}

export default Form