'use client'

import React, { useState } from 'react';
import CourseLevelNav from '../components/CourseLevelNav';
import CourseContent from '../components/CourseContent';
import Header from '../components/Header';
import { courseData } from '../data';

// Define the types for better type safety
type CourseData = {
  [key: string]: {
    [key: string]: {
      course: string;
      materials: string[];
      announcements: string[];
    }
  }
};

const CoursesPage: React.FC = () => {
  const levels: string[] = ['100', '200', '300', '400'];
  const courses: Record<string, string[]> = {
    '100': ['Mathematics', 'Physics', 'Chemistry'],
    '200': ['Advanced_Mathematics', 'Thermodynamics'],
    '300': ['Quantum_Physics', 'Organic_Chemistry'],
    '400': ['Astrophysics', 'Quantum_Chemistry'],
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
