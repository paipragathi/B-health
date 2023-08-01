import React, { useState } from "react";
import "./SideNav.css";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MedicationIcon from '@mui/icons-material/Medication';
import FileOpenIcon from '@mui/icons-material/FileOpen';

const SideNav = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="container">
      <nav className="side-nav">
        <ul className="nav-menu">
          <li
            className={`nav-item ${activeItem === "dashboard" ? "active" : ""}`}
            onClick={() => handleItemClick("dashboard")}
          >
            <a href="patient">
              <i className="fas fa-tachometer-alt"></i>
              <span className="menu-text">
             <HomeIcon/> 
              Dashboard </span>

            </a>
          </li>
          <li
            className={`nav-item ${activeItem === "users" ? "active" : ""}`}
            onClick={() => handleItemClick("users")}
          >
            <a href="#">
              <i className="fas fa-user"></i>
              <span className="menu-text">
                <PersonIcon/>
                Your Profile</span>
            </a>
          </li>
          <li
            className={`nav-item ${activeItem === "posts" ? "active" : ""}`}
            onClick={() => handleItemClick("posts")}
          >
            <a href="#">
              <i className="fas fa-file-alt"></i>
              <span className="menu-text">
                <EditNoteIcon/> Appointments</span>
            </a>
          </li>
          <li
            className={`nav-item ${activeItem === "media" ? "active" : ""}`}
            onClick={() => handleItemClick("media")}
          >
            <a href="#">
              <i className="fas fa-play"></i>
              <span className="menu-text"> <MedicationIcon/>Treatments</span>
            </a>
          </li>
          <li
            className={`nav-item ${activeItem === "exit" ? "active" : ""}`}
            onClick={() => handleItemClick("exit")}
          >
            <a href="#">
              <i className="fas fa-sign-out-alt"></i>
              <span className="menu-text"><FileOpenIcon/>Documents</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
