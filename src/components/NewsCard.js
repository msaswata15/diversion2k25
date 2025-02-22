import React from "react";
import { Link } from "react-router-dom";
import "./NewsCard.css"; // Import styles

const NewsCard = ({ image, title, description, link }) => {
    return (
        <div className="news-card">
            <img src={image} alt={title} className="news-image" />
            <div className="news-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={link} className="read-more">
                    Read More →
                </Link>
            </div>
        </div>
    );
};

export default NewsCard;
