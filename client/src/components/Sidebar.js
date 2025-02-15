import React from 'react';
import { Link } from 'react-router-dom';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const Sidebar_nav = () => {
  return (
    <div className="sidebar">

      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/home" className="sidebar-link">
            <AiIcons.AiFillHome className="sidebar-icon" />
            Home
          </Link>

        </li>
        <li  className="sidebar-link2"  >
          Categories
        </li>
        <li className="sidebar-item">
          <Link to="/rentals" className="sidebar-link">
            <FaIcons.FaRegAddressCard className="sidebar-icon" />
            Rentals
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/tutoring" className="sidebar-link">
            <IoIcons.IoMdPeople className="sidebar-icon" />
            Tutoring
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/social" className="sidebar-link">
            <FaIcons.FaUsers className="sidebar-icon" />
            Social
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/market" className="sidebar-link">
            <FaIcons.FaUsers className="sidebar-icon" />
            Market
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar_nav;
