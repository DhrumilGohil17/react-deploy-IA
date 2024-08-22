import React from "react";
import "./IUCard.css";
import logoIU from "./Logo-IU.png";

export const IUCard = (  {
    title,
    link,
}) => <div className="card-container">
    <img className="card-image" src={logoIU} alt="Inductive University" />
    <h3 className="card-title">{title}</h3>
    <a className="card-link" href={link}>Watch the video</a>
</div>;