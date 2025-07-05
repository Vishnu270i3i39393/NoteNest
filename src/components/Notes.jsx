
import React from 'react'
import { Helmet } from "react-helmet";
const cardStyle =
  'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 border-2 border-blue-700 rounded-xl shadow-lg p-4 mb-4 transition-transform transform hover:scale-105 hover:border-cyan-400';
const linkStyle =
  'block text-lg font-semibold text-cyan-300 hover:text-cyan-200 py-2 px-4 rounded-md border border-cyan-700 hover:bg-cyan-900 transition-colors duration-200';

const Notes = () => {
  return (
    <div className="min-h-screen py-8 px-2 sm:px-8">
      <Helmet>
        <title>Note | NoteNest</title>
        <meta name="description" content="Notes are displayed of all courses here." />
      </Helmet>
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mb-8 drop-shadow-lg text-center tracking-wide animate-pulse">
        📚 Question Papers Vault
      </h1>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-700 pb-2 pl-2">B.C.A Question Papers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 1 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 1 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem1)</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 2 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 2 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem2)</a></div>
          <div className={cardStyle}><a href="/files/sem3mst1.pdf" download="/files/sem3mst1.pdf" className={linkStyle}>Semester 3 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="/files/sem3mst2.pdf" download="/files/sem3mst2.pdf" className={linkStyle}>Semester 3 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="/files/sem3endsem.pdf" download="/files/sem3endsem.pdf" className={linkStyle}>End Semester (End Sem3)</a></div>
          <div className={cardStyle}><a href="/files/mst1sem4.pdf" download="/files/mst1sem4.pdf" className={linkStyle}>Semester 4 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="/files/mst2sem4.pdf" download="/files/mst2sem4.pdf" className={linkStyle}>Semester 4 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="/files/sem4endsem.pdf" download="/files/sem4endsem.pdf" className={linkStyle}>End Semester (End Sem4)</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 5 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 5 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem5)</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 6 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 6 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem6)</a></div>
        </div>
        <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b-2 border-purple-700 pb-2 pl-2 mt-8">B.Tech Question Papers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 1 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 1 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem 1)</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 2 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 2 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem 2)</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 3 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 3 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem 3)</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 4 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 4 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem 4)</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 5 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 5 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem 5)</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 6 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 6 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem 6)</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 7 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 7 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem 7)</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 8 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 8 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem 8)</a></div>
        </div>
         <h2 className="text-2xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-700 pb-2 pl-2">Diploma(Cse) Question Papers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 1 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 1 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem1)</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 2 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 2 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem2)</a></div>
          <div className={cardStyle}><a href="/files/sem3mst1.pdf" download="/files/sem3mst1.pdf" className={linkStyle}>Semester 3 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="/files/sem3mst2.pdf" download="/files/sem3mst2.pdf" className={linkStyle}>Semester 3 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="/files/sem3endsem.pdf" download="/files/sem3endsem.pdf" className={linkStyle}>End Semester (End Sem3)</a></div>
          <div className={cardStyle}><a href="/files/mst1sem4.pdf" download="/files/mst1sem4.pdf" className={linkStyle}>Semester 4 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="/files/mst2sem4.pdf" download="/files/mst2sem4.pdf" className={linkStyle}>Semester 4 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="/files/sem4endsem.pdf" download="/files/sem4endsem.pdf" className={linkStyle}>End Semester (End Sem4)</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 5 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 5 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem5)</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 6 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 6 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem6)</a></div>
        </div>

                <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b-2 border-purple-700 pb-2 pl-2 mt-8">B.B.A Question Papers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className={cardStyle}><a href="/files/BBAsem1mst1.pdf" download="/files/BBAsem1mst1.pdf" className={linkStyle}>Semester 1 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="/files/BBAsem1mst2.pdf" download="/files/BBAsem1mst2.pdf" className={linkStyle}>Semester 1 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="/files/BBAsem1endsem.pdf" download="/files/BBAsem1endsem.pdf" className={linkStyle}>End Semester (End Sem 1)</a></div>
          <div className={cardStyle}><a href="/files/BBAsem2mst1.pdf" download="/files/BBAsem2mst1.pdf" className={linkStyle}>Semester 2 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="/files/BBAsem2mst2.pdf" download="/files/BBAsem2mst2.pdf" className={linkStyle}>Semester 2 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="/files/BBAsem2endsem.pdf" download="/files/BBAsem2endsem.pdf" className={linkStyle}>End Semester (End Sem 2)</a></div>
          <div className={cardStyle}><a href="/files/BBAsem3mst1.pdf" download="/files/BBAsem3mst1.pdf" className={linkStyle}>Semester 3 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="/files/BBAsem3mst2.pdf" download="/files/BBAsem3mst2.pdf" className={linkStyle}>Semester 3 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="/files/BBAsem3endsem.pdf" download="/files/BBAsem3endsem.pdf" className={linkStyle}>End Semester (End Sem 3)</a></div>
          <div className={cardStyle}><a href="/files/BBAsem4mst1.pdf" download="/files/BBAsem4mst1.pdf" className={linkStyle}>Semester 4 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="/files/BBAsem4mst2.pdf" download="/files/BBAsem4mst2.pdf" className={linkStyle}>Semester 4 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="/files/BBAsem4endsem.pdf" download="/files/BBAsem4endsem.pdf" className={linkStyle}>End Semester (End Sem 4)</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 5 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 5 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem 5)</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 6 (M.S.T) 1</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>Semester 6 (M.S.T) 2</a></div>
          <div className={cardStyle}><a href="files/sample.pdf" download="MyDocument.pdf" className={linkStyle}>End Semester (End Sem 6)</a></div>
          </div>
      </div>
    </div>
  );
};

export default Notes