import React from 'react';
import { FiDownload } from 'react-icons/fi';

interface MaterialItem {
  title: string;
  image: string;
  year?: string;
  description?: string;
  downloadLink?: string;
}

interface CourseContentProps {
  course: string;
  materials: {
    notes: MaterialItem[];
    slides: MaterialItem[];
    videos: MaterialItem[];
    pastQuestions: MaterialItem[];
  };
  announcements: string[];
}

const CourseContent: React.FC<CourseContentProps> = ({ course, materials, announcements }) => {
  return (
    <main className="p-4 sm:p-6 lg:p-10 overflow-auto">
      <h1 className="mb-6 text-gray-800 text-2xl sm:text-3xl lg:text-4xl font-semibold">{course}</h1>
      <div className="flex-1 text-gray-700 grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Left Grid: Materials */}
        <div className="md:col-span-4 grid grid-rows-3 gap-6">
          {/* Notes */}
          <div className="bg-white border border-gray-200 p-4 sm:p-5 rounded-lg shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Notes</h3>
            <ul className="space-y-2">
              {materials.notes.map((note, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 bg-primary-green p-2 pr-4 rounded-lg border-primary-green border bg-opacity-5 border-opacity-50"
                >
                  <img src={note.image} alt={note.title} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded" />
                  <div className="flex-1">
                    <p className="text-md sm:text-lg font-medium">{note.title}</p>
                  </div>
                  <div>
                    <button className="text-green-500 hover:text-green-700">
                    <a 
                      href="/COEN407.pdf" 
                      download={note.title}
                      className="text-green-500 hover:text-green-700"
                    >
                      <FiDownload size={20} />
                    </a>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Videos */}
          <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Videos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {materials.videos.slice(0, 6).map((video, index) => (
                <div
                  key={index}
                  className="bg-primary-green p-2 sm:p-4 pr-4 rounded-lg border-primary-green border bg-opacity-5 border-opacity-50"
                >
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-32 sm:h-44 object-cover rounded mb-2 sm:mb-4"
                  />
                  <h4 className="text-md sm:text-lg font-medium mb-1 sm:mb-2">{video.title}</h4>
                  {video.description && (
                    <p className="text-sm sm:text-md text-gray-600 mb-3 sm:mb-5">{video.description}</p>
                  )}
                  <div className="mt-2 w-full">
                    <button className="border-primary-green rounded-md border bg-primary-green bg-opacity-50 text-green-700 hover:text-green-900 w-full text-xs sm:text-sm flex items-center justify-center gap-3">
                      Download
                      <FiDownload size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Questions */}
          <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Past Questions</h3>
            <ul className="space-y-2">
              {materials.pastQuestions.map((question, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 bg-primary-green p-2 pr-4 rounded-lg border-primary-green border bg-opacity-5 border-opacity-50"
                >
                  <img
                    src={question.image}
                    alt={question.title}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="text-md sm:text-lg font-medium">{question.title}</p>
                    {question.year && (
                      <p className="text-xs sm:text-sm text-gray-600">{question.year}</p>
                    )}
                  </div>
                  <div className="flex space-x-2 sm:space-x-4">
                    <button className="text-green-500 hover:text-green-700">
                      <FiDownload size={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Grid: Announcements */}
        <div className="md:col-span-2 bg-white border border-gray-200 p-4 sm:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Announcements</h3>
          <ul className="space-y-2 sm:space-y-4">
            {announcements.map((announcement, index) => (
              <li key={index} className="border-b pb-2 text-sm sm:text-md">
                {announcement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default CourseContent;
