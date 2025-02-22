import React from "react";
import Department from "../components/Department";

const GeneralMedicine = () => {
    return (
        <Department
            title="General Medicine"
            description={[
                "The General Medicine Department provides primary healthcare for various medical conditions including diabetes, hypertension, and infections.",
                "Our doctors offer preventive care, diagnosis, and treatment for acute and chronic illnesses."
            ]}
            procedures={[
                "Routine Health Checkups",
                "Chronic Disease Management",
                "Hypertension & Diabetes Care",
                "Infectious Disease Treatment",
                "Preventive Medicine"
            ]}
            imageSrc="/Branding/general-medicine-dept.webp"
        />
    );
};

export default GeneralMedicine;
