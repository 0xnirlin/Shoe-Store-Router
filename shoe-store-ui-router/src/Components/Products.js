import { Grid, OutlinedInput } from '@mui/material'
import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom";


export const Products = () => {
   
    return (
        <div>
           <div className='heading'>
               <h1>Products</h1>
           </div>
        <Outlet/>

      

        </div>


       
    )
}
