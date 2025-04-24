import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
import Swal from 'sweetalert2'
import { ApiKey } from './data'

const App = () => {

  // const Sheet_id = '1_m1r4uqhlNMosyy5GQBg0XgqqKGCqfJWyydwnIARAxg'
  // const Range = 'B3:D50'
  // const ApiKey = 'AIzaSyAujRd62kDheKBWAGbydc1YglJE6KDD8v8'
  const Sheet_id = '1uHSCImFuBmJ31gvoeIg1FMu_Pkkjaj5XlryDV1BpYx8'
  const Range = 'B2:H50'
  const Api = ApiKey
  const [list, setList] = useState([])

  useEffect(() => {
    ProductApi()

  }, []);

  const ProductApi = async () => {
    const api = `https://sheets.googleapis.com/v4/spreadsheets/${Sheet_id}/values/${Range}?key=${Api}`
    const res = await axios.get(api)
    console.log(res.data.values);
    setList(res.data.values);
  }

  function myAlert() {
    Swal.fire({
      title: "Item Added",
      icon: "success",
      draggable: true
    });
  }

  return (
    <>
      <div>
        <h1 className='flex justify-center text-center uppercase'>google sheet api fetch</h1>
        <div className='flex flex-wrap gap-4 background p-10 justify-center'>
          {list.map((item, index) => {
            return (
              <div className="card bg-base-100 w-96 shadow-sm" key={index}>
                <figure className='w-96 h-70'>
                  <img
                    src={item[1]}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {item[0]}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline mybtn" onClick={myAlert}>Add to Cart</div>
                    <div className="badge badge-outline mybtn">View</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App