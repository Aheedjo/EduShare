'use client'

import React, { useState } from 'react';
import CourseLevelNav from '../components/CourseLevelNav';
import CourseContent from '../components/CourseContent';
import Header from '../components/Header';
import { courseData } from '../data';

const CoursesPage: React.FC = () => {
  const levels: string[] = ['100', '200', '300', '400'];
  const courses: Record<string, string[]> = {
    '100': ['MATHS_102', 'PHYS_122', 'CHEM_112'],
    '200': ['MMEN_201', 'EEEN_203'],
    '300': ['COEN_301', 'COEN_307'],
    '400': ['COEN_403', 'COEN_407'],
  };

  const [selectedLevel, setSelectedLevel] = useState<string>('100');
  const [selectedCourse, setSelectedCourse] = useState<string>(courses['100'][0]);

  const course = courseData[selectedLevel]?.[selectedCourse];
  
  return (
    <main className=''>
      <Header />
      <div className="flex pt-20 h-screen overflow-hidden">
        <CourseLevelNav
          levels={levels}
          courses={courses}
          selectedLevel={selectedLevel}
          onLevelSelect={(level) => {
            setSelectedLevel(level);
            setSelectedCourse(courses[level][0]);
          }}
          onCourseSelect={(course) => setSelectedCourse(course)}
        />
        {course ? (
          <CourseContent
            course={course.course}
            materials={course.materials}
            announcements={course.announcements}
          />
        ) : (
          <div className='h-[500px] w-full text-gray-800 grid place-items-center'>
            <p>No course data available</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default CoursesPage;
