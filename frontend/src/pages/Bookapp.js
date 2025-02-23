import React, { useState } from "react";
import "./Bookapp.css";

const BookApp = ({ setAppointments }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    appointmentDate: "",
    department: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value.trim() === "")) {
      alert("Please fill all fields.");
      return;
    }

    // Add new appointment with default "Pending" status
    setAppointments((prev) => [...prev, { ...formData, status: "Pending" }]);

    alert("Appointment booked successfully!");
    setFormData({
      patientName: "",
      doctorName: "",
      appointmentDate: "",
      department: "",
      time: "",
    });
  };

  return (
    <div className="book-appointment-container">
      <form onSubmit={handleSubmit} className="appointment-form">
        <label>Patient Name:</label>
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          required
        />

        <label>Doctor Name:</label>
        <input
          type="text"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          required
        />

        <label>Department:</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        />

        <label>Appointment Date:</label>
        <input
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          required
        />

        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookApp;
