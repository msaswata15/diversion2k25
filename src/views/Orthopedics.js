import React from "react";
import Department from "../components/Department";

const Orthopedics = () => {
    return (
        <Department
            title="Orthopedics Department"
            description={[
                "The Orthopedics department specializes in treating bone, joint, and spine disorders with advanced techniques.",
                "Our team consists of skilled orthopedic surgeons, physiotherapists, and rehabilitation specialists."
            ]}
            procedures={[
                "Knee Replacement Surgery",
                "Hip Replacement Surgery",
                "Spinal Fusion",
                "Arthroscopy",
                "Fracture Treatment",
                "Ligament Repair Surgery",
                "Pediatric Orthopedic Care",
                "Sports Injury Treatment"
            ]}
            imageSrc="/Branding/orthopedics-deprt.webp"
        />
    );
};

export default Orthopedics;
