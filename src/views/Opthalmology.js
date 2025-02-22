import React from "react";
import Department from "../components/Department";

const Ophthalmology = () => {
    return (
        <Department
            title="Ophthalmology Department"
            description={[
                "Our Ophthalmology Department provides world-class eye care with the latest diagnostic and treatment technologies.",
                "We offer a range of services including cataract surgery, LASIK, and glaucoma management."
            ]}
            procedures={[
                "Cataract Surgery",
                "LASIK Laser Treatment",
                "Retinal Detachment Surgery",
                "Glaucoma Treatment",
                "Corneal Transplant"
            ]}
            imageSrc="/Branding/ophthalmology-dept.webp"
        />
    );
};

export default Ophthalmology;
