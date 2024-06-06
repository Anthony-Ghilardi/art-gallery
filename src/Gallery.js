import React from "react";

function Gallery({ objectImg, artist, title}) {

    return (
        <>
            <div className="gallery-container">
                <h1>{title}</h1>
                <img src={objectImg} alt={title}></img>
                <p>{artist}</p>
            </div>
        </>
    )
}

export default Gallery