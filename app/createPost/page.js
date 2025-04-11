// "use client"
// import React, { useState } from 'react';

// const CreatePost = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [category, setCategory] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token'); // get the JWT token
//     console.log("token",token)

//     try {
//       const response = await fetch('http://localhost:5000/api/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`, // Send token in header
//         },
//         body: JSON.stringify({ title, content, category }),
//       });

//       const data = await response.json();
//       console.log(data)

//       if (!response.ok) {
//         setError(data.error || 'Something went wrong');
//         setSuccess('');
//       } else {
//         setSuccess('Post created successfully!');
//         setError('');
//         setTitle('');
//         setContent('');
//         setCategory('');
//       }
//     } catch (err) {
//       setError('Failed to create post');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-4 text-center">Create New Post</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="w-full p-2 border rounded mb-3"
//         required
//       />
//       <textarea
//         placeholder="Content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         className="w-full p-2 border rounded mb-3"
//         rows={4}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Category"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         className="w-full p-2 border rounded mb-3"
//         required
//       />
//       <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">
//         Create Post
//       </button>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//       {success && <p className="text-green-600 mt-2">{success}</p>}
//     </form>
//   );
// };

// export default CreatePost;



"use client";
//import ProtectedRoute from '../../components/ProtectedRoute';
import Navbar from '../../components/Navbar';
import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('https://blog-co8w.onrender.com/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content, category }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Something went wrong');
        setSuccess('');
      } else {
        setSuccess('Post created successfully!');
        setError('');
        setTitle('');
        setContent('');
        setCategory('');
      }
    } catch (err) {
      setError('Failed to create post');
    }
  };

  return (

    <>
    <Navbar/>
    <div className="max-w-lg mx-auto mt-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create New Post
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={6}
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded shadow-md transition duration-300"
        >
          Create Post
        </button>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-600 text-center">{success}</p>}
      </form>
    </div>
    </>
  );
};

export default CreatePost;
