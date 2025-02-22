import React from "react";
import Department from "../components/Department";

const Nutrition = () => {
    return (
        <Department
            title="Nutrition & Dietetics"
            description={[
                "Our Nutrition Department offers personalized diet plans for patients with diabetes, heart disease, and obesity.",
                "We focus on balanced nutrition to promote a healthy lifestyle."
            ]}
            procedures={[
                "Diet Counseling",
                "Weight Management Programs",
                "Diabetic Diet Plans",
                "Sports Nutrition",
                "Child & Maternal Nutrition"
            ]}
            imageSrc="/Branding/nutrition-dept.webp"
        />
    );
};

export default Nutrition;
