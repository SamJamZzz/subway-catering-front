import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-logo'>
          <a href="/">
            <img src="https://wecatersubs.com/wp-content/uploads/2018/07/subway-we-cater-subs-logo-new.png"
                alt="WeCaterSubs.com"
            />
          </a>
        </div>
        <button className="navbar-toggle" onClick={toggleOptions}>
          <span className="navbar-toggle-icon"></span>
        </button>
        <ul className={`navbar-options ${showOptions ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="https://order.subway.com/en-CA/restaurant/11425-0/menu">Our Menu</a></li>
          <li className='navbar-dropdown' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <span>Catering</span>
            <ul className={`navbar-dropdown-menu ${showDropdown ? 'active' : ''}`}>
              <li><a href="/school-lunch">School Lunch</a></li>
              <li><a href="https://order.subway.com/en-CA/restaurant/11425-0/menu">Catering Menu</a></li>
              <li><a href="https://www.subway.com/en-CA/Catering/CateringPlanning">Catering Planning</a></li>
              <li><a href="https://www.subway.com/en-CA/Catering/CateringFAQs">Catering FAQ</a></li>
            </ul>
          </li>
          <li><a href="https://www.subway.com/en-CA/MyWayRewards">Rewards & Deals</a></li>
          <li><a href="/contact-us-subway">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;