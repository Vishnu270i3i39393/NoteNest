
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet";

const Contact = () => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_6u0myo7', 
      'template_bkg41cj', 
      formRef.current,
      'uAAHcXtFqTQKWk9-X' 
    )
    .then(() => {
      setSubmitted(true);
      setFileName('');
      formRef.current.reset();
    }, (error) => {
      alert('Failed to send message: ' + error.text);
    });
  };

  const handleFileChange = (e) => {
    setFileName(e.target.files.length > 0 ? e.target.files[0].name : '');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 px-4 py-10">
      <Helmet>
              <title>Contact | NoteNest</title>
              <meta name="description" content="Anyone can contact if they want to share their resources we actually need them all." />
            </Helmet>
      <div className="max-w-lg w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 rounded-2xl shadow-2xl p-8 border-2 border-cyan-700">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-lg text-center mb-6">
          Contact Us
        </h1>
        <p className="text-cyan-100 text-center mb-6">Have a question, suggestion, or want to share your notes? Fill out the form below and we'll get back to you soon!</p>
        {submitted ? (
          <div className="text-green-400 text-center font-semibold mb-4">Thank you! Your message has been submitted.</div>
        ) : null}
        <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="bg-gray-800 text-cyan-100 border border-cyan-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone Number"
            className="bg-gray-800 text-cyan-100 border border-cyan-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="bg-gray-800 text-cyan-100 border border-cyan-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <div className="flex flex-col gap-2">
            <label className="text-cyan-200 font-medium mb-1">Upload File <span className="text-red-400">*</span>:</label>
            <input
              id="file-upload"
              type="file"
              name="attachments"
              className="hidden"
              onChange={handleFileChange}
              required
            />
            <label htmlFor="file-upload">
              <span className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-105">
                Choose File
              </span>
            </label>
            <span className="text-cyan-300 text-xs mt-1">{fileName}</span>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 mt-2"
          >
            Submit
          </button>
        </form>
        {/* File name display handled by React state */}
        <div className="flex justify-center mt-6">
          <img src="https://img.icons8.com/color/96/000000/secured-letter.png" alt="Mail Icon" className="w-16 h-16 animate-pulse" />
        </div>
        <p className="text-xs text-cyan-400 text-center mt-4">
          
        </p>
      </div>
    </div>
  );
};

export default Contact;