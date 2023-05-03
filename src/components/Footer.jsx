import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="/">
        <img className='footer-logo' src="https://wecatersubs.com/wp-content/uploads/2020/05/subway-logo-new.png"
             alt="WeCaterSubs.com"
        />
      </a>
      <p>&#169; 2020 WeCaterSubs.com. All rights reserved | Privacy Policy | 6626B East Hastings Street, Unit B Kensington Square Plaza, Burnaby V5B 1S2</p>
      <a href="https://www.facebook.com/SubwayCanada">
        <img className='fb-logo' src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="facebook" />
      </a>
    </footer>
  )
};

export default Footer;