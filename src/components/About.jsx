import React from 'react';
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 px-4 py-10">
      <Helmet>
        <title>About | NoteNest</title>
        <meta name="description" content="Learn more about NoteNest, our mission and team." />
      </Helmet>
      <div className="max-w-3xl w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 rounded-2xl shadow-2xl p-8 border-2 border-cyan-700">
        <div className="flex flex-col sm:flex-row items-center mb-6">
          <img
            src="https://img.icons8.com/color/96/000000/open-book--v2.png"
            alt="Study Icon"
            className="w-24 h-24 mb-4 sm:mb-0 sm:mr-6 drop-shadow-lg animate-bounce"
          />
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-lg text-center sm:text-left">
            About NoteNest
          </h1>
        </div>
        <p className="text-cyan-100 text-lg mb-4 font-medium">
          NoteNest is a modern, user-friendly notes application designed for students across various fields, including B.C.A, B.Tech, and more. Our mission is to empower learners by providing easy access to high-quality study materials, previous year question papers, and comprehensive notes—all in one place.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          <img src="https://img.icons8.com/color/48/000000/books.png" alt="Books" className="w-12 h-12" />
          <img src="https://img.icons8.com/color/48/000000/note.png" alt="Notes" className="w-12 h-12" />
          <img src="https://img.icons8.com/color/48/000000/online-support.png" alt="Support" className="w-12 h-12" />
          <img src="https://img.icons8.com/color/48/000000/idea.png" alt="Idea" className="w-12 h-12" />
        </div>
        <p className="text-cyan-200 text-base mb-2">
          Whether you're preparing for exams, revising concepts, or looking for additional resources, NoteNest is your go-to platform. Students can also contribute by uploading their own notes and sharing valuable content with peers through the Contact Us section.
        </p>
        <p className="text-cyan-200 text-base mb-2">
          Our platform is constantly updated with new materials and features to enhance your learning experience. Join our growing community and make your academic journey smoother, smarter, and more collaborative! developed by me @vishnu shankar mishra
        </p>
        <div className="flex justify-center mt-6">
          <img src="https://img.icons8.com/color/96/000000/graduation-cap.png" alt="Graduation Cap" className="w-16 h-16 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default About