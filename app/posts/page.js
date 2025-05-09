// "use client"

// import { useEffect, useState } from 'react';
// import PostCard from '../../components/PostCard';
// import Navbar from '../../components/Navbar';

// export default function PostsPage() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/posts')
//       .then(res => res.json())
//       .then(data => setPosts(data));
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {posts.map(post => <PostCard key={post._id} post={post} />)}
//       </div>
//     </>
//   );
// }


// "use client"

// import { useEffect, useState } from 'react';
// import PostCard from '../../components/PostCard';
// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';

// const categories = ["All", "Technology", "Startup", "Lifestyle"];

// export default function PostsPage() {
//   const [posts, setPosts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   useEffect(() => {
//     fetch('http://localhost:5000/api/posts')
//       .then(res => res.json())
//       .then(data => setPosts(data));
//   }, []);

//   const filteredPosts = selectedCategory === "All"
//     ? posts
//     : posts.filter(post => post.category === selectedCategory.toLowerCase());

//   return (
//     <>
//       <Navbar />
//       <section className="text-center py-10 px-4">
//         <h1 className="text-4xl font-bold mb-4">Latest Blogs</h1>
//         <p className="text-gray-600 max-w-xl mx-auto">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
//         </p>

//         {/* Category Filters */}
//         <div className="flex justify-center gap-4 mt-6 flex-wrap">
//           {categories.map(cat => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-4 py-1 rounded ${
//                 selectedCategory === cat
//                   ? "bg-black text-white"
//                   : "text-black hover:text-blue-500"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Posts Grid */}
//       <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredPosts.map(post => (
//           <PostCard key={post._id} post={post} />
//         ))}
//       </div>


//       <Footer/>
//     </>
//   );
// }

"use client";

import { useEffect, useState } from 'react';
import PostCard from '../../components/PostCard';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const categories = ["All", "Technology", "Startup", "Lifestyle"];

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    fetch('https://my-blog-post-1.onrender.com/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter(post => post.category === selectedCategory.toLowerCase());

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <section className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-4">Latest Blogs</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.
        </p>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1); // reset page when category changes
              }}
              className={`px-4 py-1 rounded ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "text-black hover:text-blue-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentPosts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center my-8 gap-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === index + 1 ? "bg-black text-white" : "hover:bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

      <Footer />
    </>
  );
}
