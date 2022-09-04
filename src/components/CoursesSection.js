import React, { useEffect, useState } from "react";
import style from "./CoursesSection.module.css";
import CourseContainer from "./CourseContainer";

/**
 * @description : Load the courses into state data contain Isloading , jsonfile , errorMsg
 * ISloading when the the data fetched or there is error set to 0
 * jsonfile contain data in json file
 * errormsge show if the fetch didn't  work
 * use another port to load the json file port 8000
 *
 * @returns get Courses Component with header and description
 */
function CoursesSection() {
  const [course, setCourse] = useState("Python");
  const [data, setData] = useState({
    IsLoading: true,
    jsonFile: "",
    ErrorMsg: "",
  });
  useEffect(() => {
    let url = "http://localhost:8000/data";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData({ jsonFile: json, IsLoading: false, ErrorMsg: "" });
      })
      .catch((error) =>
        setData({ ...data, IsLoading: false, ErrorMsg: "Error" })
      );
  }, []);
  const renderCourses = () => {
    if (data.IsLoading) return <></>;
    else if (data.ErrorMsg === "Error") {
      return <></>;
    } else {
      return (
        <>
          <ImageBackground />
          <CourseIntro />
          <CategoryButton course={course} setCourse={setCourse} />
          <section className={style.course_type}>
            <div className={style.course_content}>
              <h2 className={style.udemy_header}>
                {data.jsonFile[course][0].header}
              </h2>
              <p className={style.udemy_description}>
                {data.jsonFile[course][0].description}
              </p>
              <button className={style.explore_course}>Explore {course}</button>
              <CourseContainer Course={data.jsonFile[course][0].courses} />
            </div>
          </section>
        </>
      );
    }
  };
  return <>{renderCourses()}</>;
}
let TypeofCourses = [
  "Python",
  "Excel",
  "Web Development",
  "JavaScript",
  "Data Science",
  "AWS Certification",
  "Drawing",
];
/**
 *
 * @param {*} props setCourse and Course state to handle change over courses
 * @returns tyoe of courses component
 */
function CategoryButton(props) {
  return (
    <nav className={style.course_category}>
      <ul id="coures" className={style.courses_list}>
        {TypeofCourses.map((item) => {
          return (
            <li
              key={item}
              style={{ color: item === props.course ? "black" : "gray" }}
              onClick={() => props.setCourse(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
/**
 *
 * @returns Intro To represent the data of Courses
 */
function CourseIntro() {
  return (
    <section className={style.Course_intro}>
      <div className={style.conatiner}>
        <h1 className={style.intro_h1}> A broad selection of courses</h1>
        <p className={style.intro_p}>
          Choose from 185,000 online video courses with new additions published
          every month
        </p>
      </div>
    </section>
  );
}
function ImageBackground() {
  return (
    <section className={style.background}>
      <div className={style.image_container}>
        <img
          className={style.background_image}
          alt="IntroImage"
          src={require("./images/Intro.jpg")}
        />
        <div className={style.udemy_info}>
          <h1 className={style.udemy_description}>
            Unlock the power of your people
          </h1>
          <p className={style.udemy_description}>
            Udemy Business is trusted by 10.5K+ companies around the world
            <a href="/">Find out what we can do for yours</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
export default CoursesSection;
