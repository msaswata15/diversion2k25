import React, { useState } from "react";
import { FaUserCheck, FaCalendarCheck, FaFlask, FaNotesMedical, FaClipboardCheck } from "react-icons/fa";
import "./AdminDashboard.css"; // Importing CSS for styling

const AdminDashboard = () => {
    const [selectedOption, setSelectedOption] = useState("verifyPatients");

    // Sidebar menu items
    const menuItems = [
        { name: "Verify Patients", icon: <FaUserCheck />, key: "verifyPatients" },
        { name: "Verify Appointments", icon: <FaCalendarCheck />, key: "verifyAppointments" },
        { name: "Manage Test Packages", icon: <FaFlask />, key: "manageTests" },
        { name: "Upload Prescription", icon: <FaNotesMedical />, key: "uploadPrescription" },
        { name: "Update Patient Status", icon: <FaClipboardCheck />, key: "updateStatus" },
    ];

    return (
        <div className="dashboard-container">
            {/* Sidebar Menu */}
            <div className="sidebar">
                <h2 className="sidebar-title">Admin Dashboard</h2>
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
                    {selectedOption === "verifyPatients" && <p>Verify registered patients here...</p>}
                    {selectedOption === "verifyAppointments" && <p>Check and verify upcoming appointments...</p>}
                    {selectedOption === "manageTests" && <p>Add or verify test packages...</p>}
                    {selectedOption === "uploadPrescription" && <p>Upload prescriptions for patients...</p>}
                    {selectedOption === "updateStatus" && <p>Update admitted patient status...</p>}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
