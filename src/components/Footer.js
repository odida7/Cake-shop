import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='icons'>
        <FaFacebookF />
        <GrTwitter />
        <FaLinkedinIn />
        <SiGmail />

      </div>
      <p> &copy; 2022 odidafinebakery.org </p>
    </div>
  )
}

export default Footer;

