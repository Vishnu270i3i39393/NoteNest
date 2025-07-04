import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center px-4 min-h-[60vh] w-full">
             <Helmet>
                    <title>Home | NoteNest</title>
                    <meta name="description" content="this is all about the note nest home why this website is there?" />
                  </Helmet>
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mb-6 drop-shadow-lg text-center animate-pulse">
                Welcome to NoteNest
            </h1>
            <p className="text-lg text-cyan-100 mb-8 max-w-2xl text-center font-medium">
                Hey, learner! Welcome to NoteNest. Here you can easily download question papers and notes for B.C.A and B.Tech courses. Explore a wide range of resources, stay organized, and boost your exam preparation. Start your journey to academic success with just one click!
            </p>
            <button
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 text-xl tracking-wide"
                onClick={() => navigate('/notes')}
            >
                Get Started
            </button>
        </div>
    );
};

export default Home