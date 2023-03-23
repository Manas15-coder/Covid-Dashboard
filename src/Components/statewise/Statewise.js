import React, { useState,useEffect } from 'react'
import './statewise.css'

const Statewise = () => {
    const [data,setData]= useState([])

    const fetchData= async()=>{
       const res= await fetch('https://data.covid19india.org/data.json')
       const data = await res.json();
       setData(data.statewise)
       console.log(data);
    }

    useEffect(()=>{
        setTimeout(() => {
            fetchData();
        }, 2000);
       
    },[])
  return(
    <>
    <div className='container'>
        <h1 className='main-heading text-center'><span className='covid'>COVID</span> DASHBOARD</h1>
        <div className='table-responsive'>
            <table class="table">
                <thead className='table-dark'>
                    <tr>
                        <th className='header'>State</th>
                        <th className='header'>Confirmed</th>
                        <th className='header'>Recovered</th>
                        <th className='header'>Deaths</th>
                        <th className='header'>Active</th>
                        <th className='header'>Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val,indx)=>{
                            return(
                                <tr key={indx}>
                                     <td className='state'>{val.state}</td>
                                     <td className='confirm'>{val.confirmed}</td>
                                     <td className='recover'>{val.recovered}</td>
                                     <td className='deaths'>{val.deaths}</td>
                                     <td className='active'>{val.active}</td>
                                     <td className='update'>{val.lastupdatedtime}</td>
                                </tr>
                            )

                        })
                       
                    }
              </tbody>
            </table>
        </div>
    </div>
    </>
    
  )
}

export default Statewise
