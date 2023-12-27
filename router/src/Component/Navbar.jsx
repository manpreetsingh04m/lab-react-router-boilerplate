import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{padding:"30px",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"white",color:"black"}}>
        <h1>
            KALVIUM
            <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" />
        </h1>
        <div style={{display: "flex",marginLeft:"30px"}}>
            <Link className='link' to={"/about"}>About</Link>
            <Link className='link' style={{marginLeft:"30px"}} to={"/contact"}>Contact</Link>
        </div>
    </div>
  )
}