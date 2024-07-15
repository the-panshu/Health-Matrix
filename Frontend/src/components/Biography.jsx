import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <h3>Who we are</h3>
        <p>
          Health Matrix, your premier solution for efficient hospital
          management. Our innovative platform streamlines administrative tasks,
          enhances patient care, and optimizes resource allocation. With Health
          Matrix, experience seamless integration of medical records,
          appointment scheduling, and billing processes, empowering healthcare
          providers to focus on what matters most – delivering exceptional
          patient care.
        </p>
        <p>
          "Doctor: A diligent overseer, compassionately treating others,
          restoring health with dedication, transforming ordinary remedies into
          cures, relieving suffering tirelessly."
        </p>
      </div>
    </div>
  );
};

export default Biography;
