import React from "react";
import compras1 from "../assets/compras1.jpg";
import compras2 from "../assets/compras2.jpg";
import compras3 from "../assets/compras3.jpg";

function Carousel() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={compras1} className="d-block w-100 carouselImg" />
          </div>
          <div className="carousel-item">
            <img src={compras2} className="d-block w-100 carouselImg" />
          </div>
          <div className="carousel-item">
            <img src={compras3} className="d-block w-100 carouselImg" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
