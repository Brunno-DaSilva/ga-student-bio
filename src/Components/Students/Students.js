import React from "react";
import Cards from "../Cards/Cards";
import "./students.scss";

const Students = ({ studentData }) => {
  return (
    <div className="students">
      <div className="students__title animated delay-1s fadeInLeft">
        <h1>
          <span className="animated delay-1shalf fadeInUp">Students </span>
          <span className="animated delay-2s fadeInUp">Bios</span>
        </h1>
      </div>
      <div className="students-data">
        {studentData.map(({ id, ...otherSectionProps }) => {
          return <Cards key={id} {...otherSectionProps} />;
        })}
      </div>
    </div>
  );
};

export default Students;
