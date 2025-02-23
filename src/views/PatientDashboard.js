import React, { useState } from "react";
import { FaCalendarCheck, FaVial, FaNotesMedical, FaUserCheck, FaPlusSquare, FaFlask } from "react-icons/fa";
import "./PatientDashboard.css"; // Importing CSS for styling
import Navbar from "../components/Navbar";
import PatientNavbar from "../components/PatientNavBar";
import PatientStatusTable from "../components/PatientStatus";
import ScheduledAppointments from "../components/ScheduledAppointments";
import ScheduledTests from "../components/ScheduledTests";
import MedicalReports from "../components/MedicalReports";
import BookAppointment from "../components/BookAppointment";
const PatientDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("appointments");

  // Sidebar menu items
  const menuItems = [
    { name: "Book an Appointment", icon: <FaPlusSquare />, key: "bookAppointment" },
    { name: "Book Test Package", icon: <FaFlask />, key: "bookTest" },

    { name: "Scheduled Appointments", icon: <FaCalendarCheck />, key: "appointments" },
    { name: "Scheduled Tests", icon: <FaVial />, key: "tests" },
    { name: "Medical Reports", icon: <FaNotesMedical />, key: "reports" },
    { name: "Patient Current Status", icon: <FaUserCheck />, key: "status" },
  ];

  return (
    <>
    <PatientNavbar/>
    
    <div className="dashboard-container">
      {/* Sidebar Menu */}
      <div className="sidebar">
        <h2 className="sidebar-title">Patient Dashboard</h2>
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={selectedOption === item.key ? "menu-item active" : "menu-item"}
              onClick={() => setSelectedOption(item.key)}
            >
              {item.icon} <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>{menuItems.find(item => item.key === selectedOption)?.name}</h2>
        <div className="content-box">
          {selectedOption === "appointments" && <ScheduledAppointments/>}
          {selectedOption === "tests" && <ScheduledTests/>}
          {selectedOption === "bookAppointment" && <BookAppointment/>}
          {selectedOption === "bookTest" && <p>Choose a test package to book...</p>}
          {selectedOption === "reports" && <MedicalReports/>}
          {selectedOption === "status" && <PatientStatusTable/>}
        </div>
      </div>
    </div>
    </>
  );
};

export default PatientDashboard;
