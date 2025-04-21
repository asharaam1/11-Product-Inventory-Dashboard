import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const Sheet_id = '1_m1r4uqhlNMosyy5GQBg0XgqqKGCqfJWyydwnIARAxg'
  const Range = 'B3:D50'
  const ApiKey = 'AIzaSyAujRd62kDheKBWAGbydc1YglJE6KDD8v8'
  const [list, setList] = useState([])

  useEffect(() => {
    ProductApi()

  }, []);

  const ProductApi = async () => {
    const api = `https://sheets.googleapis.com/v4/spreadsheets/${Sheet_id}/values/${Range}?key=${ApiKey}`
    const res = await axios.get(api)
    console.log(res.data.values);
    setList(res.data.values);
  }

  return (
    <>
      <div>
        <h1>google sheet api fetch</h1>
      </div>
    </>
  )
}

export default App