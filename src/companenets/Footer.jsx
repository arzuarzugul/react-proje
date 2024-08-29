import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
        <div className='social-medya'>
            <p>&copy;2023burger33.com</p>
            <FaInstagram/>
            <FaFacebook/>
            <FaTwitterSquare/>
        </div>
      
    </div>
  )
}

export default Footer
