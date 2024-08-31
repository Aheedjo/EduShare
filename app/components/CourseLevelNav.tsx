import React from 'react';

interface CourseLevelNavProps {
  levels: string[];
  courses: { [key: string]: string[] };
  selectedLevel: string;
  onLevelSelect: (level: string) => void;
  onCourseSelect: (course: string) => void;
}

const CourseLevelNav: React.FC<CourseLevelNavProps> = ({
  levels,
  courses,
  selectedLevel,
  onLevelSelect,
  onCourseSelect,
}) => {
  return (
    <div className="bg-gray-100 py-4 px-4 md:py-6 md:px-10 min-w-full md:min-w-64">
      <h2 className="text-lg md:text-xl font-bold mb-4 text-primary-green">Levels</h2>
      <ul className="space-y-2">
        {levels.map((level) => (
          <li key={level}>
            <button
              className={`w-full text-left px-3 py-2 rounded-md ${
                selectedLevel === level ? 'bg-primary-green text-white' : 'text-gray-700'
              }`}
              onClick={() => onLevelSelect(level)}
            >
              Level {level}
            </button>
            {selectedLevel === level && (
              <ul className="ml-2 md:ml-4 mt-2 space-y-2">
                {courses[level].map((course) => (
                  <li key={course}>
                    <button
                      className="w-full text-left px-3 py-2 text-gray-600 hover:text-primary-green"
                      onClick={() => onCourseSelect(course)}
                    >
                      {course.replace(/_/g, ' ')}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseLevelNav;
