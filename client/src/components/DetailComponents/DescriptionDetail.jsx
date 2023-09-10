import React from "react";
import style from "./DescriptionDetail.module.css";

const DescriptionDetail = ({ description }) => {
  return (
    <div className={style["description-container"]}>
      <div className={style["card-border-1"]}>
      <div className={style["description-content"]}>
        <h3 className={style["description-title"]}>Descripción</h3>
        <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionDetail;