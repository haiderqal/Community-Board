import React from "react";

const Board = ({ title, imgUrl, link }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3> {/* Dynamically display the restaurant name */}
      </div>
      
      <div className="card-body">
        <img src={imgUrl} alt={title} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
        {/* Display the image */}
      </div>

      <div className="card-footer">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button>Visit Website</button> {/* Button to visit the restaurant's website */}
        </a>
      </div>
    </div>
  );
};

export default Board;  // Ensure you're exporting the correct component
