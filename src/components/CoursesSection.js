import React from "react";
import style from "./CoursesSection.module.css";
import CourseContainer from "./CourseContainer";
/**
 *
 * @param {object} props - data : Contain all Course , header : contain header of course , description : contain description of course
 * Course_type : contain course name
 * @returns get Courses Component with header and description
 */
function CoursesSection(props) {
  return (
    <section className={style.course_type}>
      <div className={style.course_content}>
        <h2 className={style.udemy_header}>{props.header}</h2>
        <p className={style.udemy_description}>{props.description}</p>
        <button className={style.explore_course}>
          Explore {props.Course_type}
        </button>
        <CourseContainer Course={props.data} />
      </div>
    </section>
  );
}

export default CoursesSection;
