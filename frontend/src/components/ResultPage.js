import React from 'react'
import { useState, useEffect } from 'react'

const ResultPage = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/data').then(res => {
            if (res.ok) {
                return res.json();
                console.log(res.json());
            }
        }).then(jsonRes => setdata(jsonRes));
    })

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-lg">
              <h1 className="text-xl font-semibold">Name: {item.name}</h1>
              <p className="text-gray-600">Number: {item.number}</p>
              <h2 className="text-lg font-semibold mt-2">Crop Details</h2>
              {item.cropData.map((crop, index) => (
                <div key={index} className="mt-2">
                  <p>Crop Name: {crop.crop_name}</p>
                  <p>Crop Area: {crop.crop_area}</p>
                  <p>Products Used: {crop.products_used}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
      
      
}

export default ResultPage



// contacttolokesh22@gmail.com