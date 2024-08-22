import React from "react";
import "./IUCard.css";
import logoKBA from "./Knowledgebase.png";

export const KBACard = (  {
    title,
    link,
    description = ' ',
}) => <div className="card-container">
    <img className="card-image" src={logoKBA} alt="Card Image" />
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
    <a className="card-link" href={link}>Link to Knowledge Base Article</a>
</div>;
