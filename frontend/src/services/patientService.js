import axios from "axios";

const API_URL = "http://localhost:5000/api/patient";

// Get patient data (appointments, tests, reports)
export const getPatientData = async (patientId) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/${patientId}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};
