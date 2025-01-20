import React from 'react'
import Post from './Post'

const PostPage = ({posts,setPosts}) => {
  return (
    <div>
        {posts.map(post => 
            <Post
            key={post.id}
            post = {post}
            setPosts = {setPosts}
            />
        )}
    </div>
  )
}

export default PostPage