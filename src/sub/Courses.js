import React from 'react';
import './Courses.css';

const courseData = [
  {
    name: 'C C++ and DSA',
    description: 'Master data structures and algorithms with C/C++.',
    img: 'assets/images/courses-01.jpg',
    isFree: false
  },
  {
    name: 'Data Analytics',
    description: 'Learn to analyze and interpret complex data.',
    img: 'assets/images/courses-02.jpg',
    isFree: true
  },
  {
    name: 'Data Science',
    description: 'Build data models and predictive systems.',
    img: 'assets/images/courses-03.jpg',
    isFree: false
  },
  {
    name: 'Full Stack Development (MERN, MEAN)',
    description: 'Learn MERN and MEAN stacks end-to-end.',
    img: 'assets/images/courses-04.jpg',
    isFree: true
  },
  {
    name: 'Java (Core + Advanced)',
    description: 'Write powerful back-end apps with Java.',
    img: 'assets/images/courses-05.jpg',
    isFree: false
  },
  {
    name: 'Python',
    description: 'Automate, analyze, and build with Python.',
    img: 'assets/images/courses-01.jpg',
    isFree: true
  }
];

function Courses() {
  return (
    <section className="courses-section">
      <div className="section-heading">
        <h2>Choose Your Course</h2>
      </div>
      <div className="courses-grid">
        {courseData.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.img} alt={course.name} />
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <button className={course.isFree ? 'free-btn' : 'pay-btn'}>
              {course.isFree ? 'Free' : 'Pay'} <i className="fa fa-angle-double-right"></i>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
