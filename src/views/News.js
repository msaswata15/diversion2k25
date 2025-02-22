import React from "react";
import Navbar from "../components/Navbar";
import Appprom from "../components/Appprom";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard"; // Import NewsCard component
import "./News.css";

const newsData = [
    {
        image: "/images/news1.jpg",
        title: "Breakthrough in Cardiology",
        description: "Scientists have discovered a new technique to treat heart disease...",
        link: "/news/breakthrough-cardiology",
    },
    {
        image: "/News/1725449970-69.jpeg",
        title: "Medical Conference 2025",
        description: "Join the biggest medical conference to discuss the future of healthcare...",
        link: "/news/medical-conference-2025",
    },
    {
        image: "/images/news3.jpg",
        title: "New Healthcare Policies",
        description: "Government announces new policies to improve healthcare services...",
        link: "/news/healthcare-policies",
    },
    {
        image: "/images/news1.jpg",
        title: "Breakthrough in Cardiology",
        description: "Scientists have discovered a new technique to treat heart disease...",
        link: "/news/breakthrough-cardiology",
    },
    {
        image: "/News/1725449970-69.jpeg",
        title: "Medical Conference 2025",
        description: "Join the biggest medical conference to discuss the future of healthcare...",
        link: "/news/medical-conference-2025",
    },
    {
        image: "/images/news3.jpg",
        title: "New Healthcare Policies",
        description: "Government announces new policies to improve healthcare services...",
        link: "/news/healthcare-policies",
    },
];

const News = () => {
    return (
        <div>
            <Navbar />
            <div className="hero-11">Media, News & Events</div>

            {/* News Cards Section */}
            <div className="news-container">
                {newsData.map((news, index) => (
                    <NewsCard
                        key={index}
                        image={news.image}
                        title={news.title}
                        description={news.description}
                        link={news.link}
                    />
                ))}
            </div>
            <div className="space"></div>

            <Appprom />
            <Footer />
        </div>
    );
};

export default News;
