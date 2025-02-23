import React from 'react'
import "./PatientStatus.css";

const MedicalReports = () => {
    const reportData = [
      { id: 301, patient: "Saswata Mondal", doctor: "Dr. Smith", report: "Blood Test and Lipid Panel Report", date: "2025-03-05", file: "blood_test_david.pdf" },
      { id: 302, patient: "Saswata Mondal", doctor: "Dr. Johnson", report: "MRI , ECG and CT Scan Report", date: "2025-03-06", file: "mri_emma.pdf" },
      { id: 303, patient: "Saswata Mondal", doctor: "Dr. Lee", report: "ECG and Blood Sugar Test Report", date: "2025-03-07", file: "ecg_sophia.pdf" },
      { id: 304, patient: "Saswata Mondal", doctor: "Dr. Smith", report: "X-Ray and Thyroid Test", date: "2025-03-08", file: "liver_function_oliver.pdf" },
    ];
  
    return (
      <div className="table-container">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Medical Reports</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Report</th>
                <th>Date</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.patient}</td>
                  <td>{report.doctor}</td>
                  <td>{report.report}</td>
                  <td>{report.date}</td>
                  <td>
                    <a href={`path/to/reports/${report.file}`} download className="text-blue-500 hover:underline">Download</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default MedicalReports;
  