import React from "react";
import "./PatientStatus.css";

const ScheduledAppointments = () => {
    const appointmentData = [
      { id: 1, patient: "Saswata Mondal", doctor: "Dr. Smith", date: "2025-03-05", time: "10:00 AM", status: "pending" },
      { id: 2, patient: "Saswata Mondal", doctor: "Dr. Johnson", date: "2025-02-23", time: "2:00 PM", status: "completed" },
      { id: 3, patient: "Saswata Mondal", doctor: "Dr. Lee", date: "2025-03-25", time: "11:30 AM", status: "rejected" },
      { id: 4, patient: "Saswata Mondal", doctor: "Dr. Smith", date: "2025-02-29", time: "11:30 AM", status: "pending" }
    ];
  
    return (
      <div className="table-container">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Scheduled Appointments</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointmentData.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{appointment.patient}</td>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td className="status">
                    <span className={`status-dot ${appointment.status}`}></span>
                    <span className={`status-text ${appointment.status}`}>{appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default ScheduledAppointments;