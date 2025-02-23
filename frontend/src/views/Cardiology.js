import React from "react";
import Department from "../components/Department";

const Cardiology = () => {
    return (
        <Department
            title="Cardiology Department"
            description={[
                "An excellent team of dedicated cardiologists, cardiothoracic surgeons, anesthetists, perfusionists, nursing, and other paramedical staff make cardiac care complete and affordable at Peerless Hospital.",
                "We have a dedicated cath lab, modular operation theatres, modular ICCU, ITU, CTVS ITU, and cardiac step-down ward to ensure safe treatment, along with ambulances for comfortable transportation."
            ]}
            procedures={[
                "Coronary and peripheral angiography",
                "Coronary and peripheral angioplasty (stenting)",
                "Pacemaker implantation",
                "CRT and CRTD implantation",
                "Single and Dual Chamber ICD Implantation",
                "Device closure of ASD, VSD, PDA, and other defects",
                "FFR, IVUS",
                "Stenting of arteries - carotid, cerebral, renal, visceral, femoral, etc.",
                "Balloon Aortic / Mitral / Pulmonary Valvuloplasty",
                "Embolotherapy for visceral bleeding"
            ]}
            imageSrc="/Branding/cardiology-deprt.webp"
        />
    );
};

export default Cardiology;
