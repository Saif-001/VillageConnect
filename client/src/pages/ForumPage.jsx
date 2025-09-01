// client/src/components/ForumPage.jsx
import React, { useState, useEffect, useCallback} from 'react';
import axios from 'axios';

const ForumPage = () => {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/posts`;

  const fetchPosts = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]); // Fetch posts on component mount

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim() || !author.trim()) return; // Prevent empty posts
    try {
      await axios.post(apiUrl, { author, content });
      // Clear form and refetch posts to show the new one
      setAuthor('');
      setContent('');
      fetchPosts(); 
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Community Forum</h2>

      {/* Form to Create a New Post */}
      <form onSubmit={handleSubmit} className="mb-8 p-4 border rounded-lg bg-white shadow-md">
        <h3 className="text-xl font-semibold mb-2">Create a New Post</h3>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Submit Post
        </button>
      </form>

      {/* List of Posts */}
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post._id} className="p-4 border rounded-lg bg-white shadow">
            <p className="text-gray-800">{post.content}</p>
            <p className="text-sm text-gray-500 mt-2">- {post.author} on {new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;