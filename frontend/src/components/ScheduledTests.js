import React from "react";
import "./PatientStatus.css";


const ScheduledTests = () => {
    const testData = [
      { id: 1, patient: "Saswata Mondal", doctor: "Dr. Smith", tests: ["Blood Test", "Lipid Panel Test"], date: "2025-03-05", time: "9:00 AM", status: "pending" },
      { id: 2, patient: "Saswata Mondal", doctor: "Dr. Johnson", tests: ["MRI", "ECG", "CT Scan"], date: "2025-03-06", time: "1:00 PM", status: "completed" },
      { id: 3, patient: "Saswata Mondal", doctor: "Dr. Lee", tests: ["ECG", "Blood Sugar Test"], date: "2025-03-07", time: "11:00 AM", status: "rejected" },
      { id: 4, patient: "Saswata Mondal", doctor: "Dr. Smith", tests: ["Lipid Panel Test", "X-ray", "Thyroid Test", "D Dimer Test"], date: "2025-03-08", time: "10:30 AM", status: "pending" },
    ];
  
    return (
      <div className="table-container">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Scheduled Tests</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Tests</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {testData.map((test) => (
                <tr key={test.id}>
                  <td>{test.id}</td>
                  <td>{test.patient}</td>
                  <td>{test.doctor}</td>
                  <td>{test.tests.join(", ")}</td>
                  <td>{test.date}</td>
                  <td>{test.time}</td>
                  <td className="status">
                    <span className={`status-dot ${test.status}`}></span>
                    <span className={`status-text ${test.status}`}>{test.status.charAt(0).toUpperCase() + test.status.slice(1)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default ScheduledTests;