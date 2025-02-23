import React, { useState } from "react";
import { FaPlusCircle, FaCheckCircle } from "react-icons/fa";
import "./Testpckg.css";

const allTests = [
  "Blood Test",
  "X-Ray",
  "MRI Scan",
  "CT Scan",
  "Urine Test",
  "ECG",
  "Liver Function Test",
  "Kidney Function Test",
  "Thyroid Test",
  "Diabetes Test",
  "Cholesterol Test",
  "Allergy Test",
  "HIV Test",
  "Vitamin D Test",
  "Hemoglobin Test",
  "Dengue Test",
  "COVID-19 Test",
  "Cancer Screening",
  "Bone Density Test",
  "Lipid Profile",
  "Liver Panel",
  "Complete Blood Count (CBC)",
  "Electrolyte Panel",
  "Hormone Panel",
];

const TestPckg = () => {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [selectedTests, setSelectedTests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleTest = (test) => {
    setSelectedTests((prev) =>
      prev.includes(test) ? prev.filter((t) => t !== test) : [...prev, test]
    );
  };

  const handleSubmit = () => {
    if (!patientName || !doctorName || selectedTests.length === 0) {
      alert("Please fill all fields and select at least one test.");
      return;
    }
    console.log("Appointment Submitted", {
      patientName,
      doctorName,
      selectedTests,
    });
    alert("Test Package Booked Successfully!");
    setPatientName("");
    setDoctorName("");
    setSelectedTests([]);
    setSearchTerm("");
  };

  const filteredTests = allTests.filter((test) =>
    test.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="testpckg-container">
      <div className="form-group">
        <label>Patient Name</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          placeholder="Enter patient name"
        />
      </div>

      <div className="form-group">
        <label>Prescribing Doctor</label>
        <input
          type="text"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          placeholder="Enter doctor's name"
        />
      </div>

      <div className="form-group">
        <label>Search & Select Tests</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for tests..."
          className="search-bar"
        />
        <ul className="test-list">
          {filteredTests.map((test) => (
            <li
              key={test}
              className={`test-item ${
                selectedTests.includes(test) ? "selected" : ""
              }`}
              onClick={() => toggleTest(test)}
            >
              {test}{" "}
              {selectedTests.includes(test) ? (
                <FaCheckCircle className="selected-icon" />
              ) : (
                <FaPlusCircle className="add-icon" />
              )}
            </li>
          ))}
        </ul>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default TestPckg;
