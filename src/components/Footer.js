import React from 'react'
import logo from './pic/logo.png';
const Footer = () => {
  return (
    <>
      <footer>
         <div className='container text-center top'>
            <div className='img'id="logo">
                <img src ={logo}  alt=""/>
                <p>{Date} All Rights Reserved by Orion MW
                </p>
            </div>
        </div>
      
      </footer>
    </>
  )
}

export default Footer
