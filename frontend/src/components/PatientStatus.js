import React from "react";
import "./PatientStatus.css";

const PatientStatusTable = () => {
    const patientData = [
      { id: 1, name: "Saswata Mondal", age: 45, condition: "Stable", lastVisit: "2025-02-12", status: "completed" },
      { id: 1, name: "Saswata Mondal", age: 45, condition: "Critical", lastVisit: "2025-02-23", status: "pending" },

    ];
  
    return (
      <div className="table-container">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Current Patient Status</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Condition</th>
                <th>Last Visit</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {patientData.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.condition}</td>
                  <td>{patient.lastVisit}</td>
                  <td className="status">
                    <span className={`status-dot ${patient.status}`}></span>
                    <span className={`status-text ${patient.status}`}>{patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default PatientStatusTable;
  