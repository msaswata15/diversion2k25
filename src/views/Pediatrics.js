import React from "react";
import Department from "../components/Department";

const Pediatrics = () => {
    return (
        <Department
            title="Pediatrics Department"
            description={[
                "The Pediatrics Department specializes in child health, providing vaccinations, growth monitoring, and pediatric surgeries.",
                "Our team ensures the best care for newborns, infants, and children."
            ]}
            procedures={[
                "Routine Health Checkups",
                "Vaccination Programs",
                "Neonatal Intensive Care (NICU)",
                "Childhood Allergy Treatment",
                "Pediatric Surgery"
            ]}
            imageSrc="/Branding/pediatrics-dept.webp"
        />
    );
};

export default Pediatrics;
