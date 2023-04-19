import React, { useState, useEffect } from 'react'
import LazyLoadPost from './LazyLoadPost'

const ImagePost = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/')
      .then((response) => response.json())
      .then((json) => setPosts(json))
  })

  return (
    <div className="container p-4">
      <h1 className="text-center mb-5">Lazy Loading Image</h1>
      <div className="container d-flex flex-column gap-3">
        {posts.map((post) => (
          <LazyLoadPost key={post.id} title={post.title} imgUrl={post.url} />
        ))}
      </div>
    </div>
  )
}

export default ImagePost
