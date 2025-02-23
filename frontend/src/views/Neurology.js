import React from "react";
import Department from "../components/Department";

const Neurology = () => {
    return (
        <Department
            title="Neurology Department"
            description={[
                "The Neurology department provides state-of-the-art diagnostic and therapeutic services for all neurological disorders.",
                "We have a highly experienced team of neurologists, neurosurgeons, and rehabilitation specialists dedicated to patient care."
            ]}
            procedures={[
                "Stroke Management",
                "Neurophysiology Testing (EEG, EMG, NCS)",
                "Epilepsy Treatment",
                "Migraine and Headache Management",
                "Neurodegenerative Disorder Treatment",
                "Brain Tumor Surgery",
                "Spinal Cord Surgery",
                "Neuro-Rehabilitation"
            ]}
            imageSrc="/Branding/neurology-deprt.webp"
        />
    );
};

export default Neurology;
