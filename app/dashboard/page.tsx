'use client'

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';
import { courseData as initialCourseData } from '../data';

const levels: string[] = ['100', '200', '300', '400'];
const courses: Record<string, string[]> = {
  '100': ['MATHS_102', 'PHYS_122', 'CHEM_112'],
  '200': ['MMEN_201', 'EEEN_203'],
  '300': ['COEN_301', 'COEN_307'],
  '400': ['COEN_402', 'COEN_407'],
};

const DashboardPage: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [action, setAction] = useState<string | null>(null);
  const [courseData, setCourseData] = useState<any>(initialCourseData);
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string>('');
  const [announcement, setAnnouncement] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const loginStatus = localStorage.getItem('loggedIn');
    if (loginStatus !== 'true') {
      router.push('/');
    }
  }, [router]);

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(e.target.value);
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(e.target.value);
    setSelectedCourse(''); // Reset course selection when level changes
  };

  const handleActionClick = (actionType: string) => {
    setAction(actionType);
  };

  const handleUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedCourse && selectedLevel) {
      const updatedCourseData = { ...courseData };
      
      // Ensure the level exists in the course data
      if (!updatedCourseData[selectedLevel]) {
        updatedCourseData[selectedLevel] = {};
      }

      const selectedCourseData = updatedCourseData[selectedLevel][selectedCourse] || {
        course: selectedCourse,
        materials: {
          notes: [],
          slides: [],
          videos: [],
          pastQuestions: [],
        },
        announcements: [],
      };

      switch (action) {
        case 'Upload Materials':
          if (file) {
            const newMaterial = {
              title: file.name,
              image: URL.createObjectURL(file), // Assuming you need an image URL for preview
              downloadLink: URL.createObjectURL(file),
            };
            selectedCourseData.materials.notes.push(newMaterial); // or wherever it fits
          }
          break;
        case 'Upload Videos':
          if (url) {
            const newVideo = {
              title: 'Video',
              videoLink: url,
            };
            selectedCourseData.materials.videos.push(newVideo);
          }
          break;
        case 'Upload Past Questions':
          if (file) {
            const newQuestion = {
              title: file.name,
              downloadLink: URL.createObjectURL(file),
              year: '2024', // Add logic to determine the year if needed
            };
            selectedCourseData.materials.pastQuestions.push(newQuestion);
          }
          break;
        case 'Add Announcement':
          if (announcement) {
            selectedCourseData.announcements.push(announcement);
          }
          break;
        default:
          break;
      }

      // Set the updated course data
      updatedCourseData[selectedLevel][selectedCourse] = selectedCourseData;
      setCourseData(updatedCourseData);
      alert('Data updated successfully!');
      // Reset fields
      setFile(null);
      setUrl('');
      setAnnouncement('');
    } else {
      alert('Please select a course and level.');
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 px-10 pb-20 pt-32">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Lecturer Dashboard</h1>
          <p className="text-lg text-gray-700">Here, you can manage course materials, upload videos, past questions, and announcements for your courses. Select a course and level to get started.</p>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm mb-6">
          <label className="block mb-4">
            <span className="text-gray-700 font-semibold">Select Level</span>
            <select
              value={selectedLevel}
              onChange={handleLevelChange}
              className="block w-full mt-3 border border-primary-green p-2 rounded-md"
            >
              <option value="">Select Level</option>
              {levels.map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </label>

          <label className="block mb-2">
            <span className="text-gray-700 font-semibold">Select Course</span>
            <select
              value={selectedCourse}
              onChange={handleCourseChange}
              className="block w-full mt-3 border border-primary-green p-2 rounded-md"
              disabled={!selectedLevel} // Disable if no level is selected
            >
              <option value="">Select Course</option>
              {selectedLevel &&
                courses[selectedLevel].map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
            </select>
          </label>
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
          <button
            onClick={() => handleActionClick('Upload Materials')}
            className="bg-primary-green text-white px-6 py-3 rounded shadow hover:bg-primary-green-dark transition"
          >
            Upload Materials
          </button>
          <button
            onClick={() => handleActionClick('Upload Videos')}
            className="bg-primary-green text-white px-6 py-3 rounded shadow hover:bg-primary-green-dark transition"
          >
            Upload Videos
          </button>
          <button
            onClick={() => handleActionClick('Upload Past Questions')}
            className="bg-primary-green text-white px-6 py-3 rounded shadow hover:bg-primary-green-dark transition"
          >
            Upload Past Questions
          </button>
          <button
            onClick={() => handleActionClick('Add Announcement')}
            className="bg-primary-green text-white px-6 py-3 rounded shadow hover:bg-primary-green-dark transition"
          >
            Add Announcement
          </button>
        </div>

        {action && (
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-2xl font-bold mb-4">{action}</h2>
            <form onSubmit={handleUpload}>
              {action === 'Upload Materials' && (
                <label className="block mb-4">
                  <span className="text-gray-700">Upload Material File</span>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="mt-1 block w-full border border-primary-green p-2 rounded-md"
                  />
                </label>
              )}
              {action === 'Upload Videos' && (
                <label className="block mb-4">
                  <span className="text-gray-700">Video URL</span>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter video URL"
                    className="mt-1 block w-full border border-primary-green p-2 rounded-md"
                  />
                </label>
              )}
              {action === 'Upload Past Questions' && (
                <label className="block mb-4">
                  <span className="text-gray-700">Upload Past Question File</span>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="mt-1 block w-full border border-primary-green p-2 rounded-md"
                  />
                </label>
              )}
              {action === 'Add Announcement' && (
                <label className="block mb-4">
                  <span className="text-gray-700">Announcement Text</span>
                  <textarea
                    value={announcement}
                    onChange={(e) => setAnnouncement(e.target.value)}
                    placeholder="Enter announcement"
                    className="mt-1 block w-full border border-primary-green p-2 rounded-md"
                  />
                </label>
              )}
              <button
                type="submit"
                className="bg-primary-green text-white px-6 py-3 rounded shadow hover:bg-primary-green-dark transition"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
