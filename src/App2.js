import Table from './Table'
import JsonData from './data.json'

import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [tableData, setTableData] = useState()
  const [tableDataCopy, setTableDataCopy] = useState(JsonData)
  const [filterData, setFilterData] = useState()
  const [inputData, setInputData] = useState('')

  const searching = (val) =>{
    setInputData(val)
    const temp = tableDataCopy.filter((item) => item.email.match(val))
    setTableData(temp)
  } 

  const filtering = () =>{
    const temp = tableData.filter((item) => item.email === inputData)
    setTableData(temp)
  }

  const fetchData = async() =>{
    try {
    // let res = await axios.get('https://jsonplaceholder.typicode.com/users').then(response => console.log(`axios data is ${JSON.stringify(response.data)}`))  
    // let res = await axios.get('http://localhost:3001/getMovieData').then(response => console.log(`axios data is ${JSON.stringify(response.data.movieInfo)}`))
    let res = await axios.get('http://localhost:3001/getMovieData').then(response => response.data.movieInfo )
    setTableData(res)
    } catch(err){
      console.error(err);
    }
  } 

  useEffect(() => {
    fetchData()
  },[])

  useEffect(() => {
    // console.log(`table data is ${JSON.stringify(tableData)}`)
  },[tableData])

  return (
    <div className="App">
      <h1>Hello Geeks!!!</h1>
      <form ></form>
      <input type='text' onChange={(e) => searching(e.target.value)}></input>
      <button onClick={filtering} > search </button>
      <Table  tableData={tableData} />
 
    </div>
  );
}
 
export default App;