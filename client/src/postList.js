import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default () => {

    const [posts, setPost] = useState({});
    const fetchPost = async () => {
        const res = await axios.get("http://localhost:4002/post");

        setPost(res.data)
    };

    useEffect(() => {
        fetchPost();
    }, []);

    const renderedPosts = Object.values(posts).map(post => {
    return (
      <div
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};