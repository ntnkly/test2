import React from 'react'
// import JsonData from './data.json'


 function Table(props){
    const DisplayData=props?.tableData?.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.title}</td>
                    <td>{info.genre}</td>
                    <td>{info.language}</td>
                    <td>{info.ratings}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Language</th>
                    <th>Ratings</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default Table;