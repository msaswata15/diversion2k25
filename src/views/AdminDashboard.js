import { useEffect, useState } from "react";
import { getAllPatients, updatePatientStatus } from "../services/adminService";

const AdminDashboard = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const res = await getAllPatients();
                setPatients(res);
            } catch (error) {
                console.error("Error fetching patients", error);
            }
        };
        fetchPatients();
    }, []);

    const handleUpdateStatus = async (id) => {
        await updatePatientStatus(id, "Recovered");
        alert("Patient status updated");
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            {patients.map((patient) => (
                <div key={patient._id}>
                    <p>{patient.name} - {patient.status}</p>
                    <button onClick={() => handleUpdateStatus(patient._id)}>Mark as Recovered</button>
                </div>
            ))}
        </div>
    );
};

export default AdminDashboard;
