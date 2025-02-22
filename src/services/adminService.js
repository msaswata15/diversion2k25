import axios from "axios";

const API_URL = "http://localhost:5000/api/admin";

// Fetch all patients
export const getAllPatients = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/patients`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

// Update patient status
export const updatePatientStatus = async (patientId, status) => {
    const token = localStorage.getItem("token");
    await axios.put(`${API_URL}/patients/${patientId}`, { status }, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
