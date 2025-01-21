import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  
  return (
    <div>
        <Link to={`newpost/${post.id}`} className='postlink' >
        <article className='post' >
          {post &&
            <>
            <h3>{post.title}</h3>
            <p>{post.datetime}</p>
            <p>{(post.body).length <= 25 ? post.body 
            : `${(post.body).slice(0,25)}...`}</p>
            </> }
          {!post && 
          <>
          <h1>Post not found</h1>
          <p>Visit our home page</p>
          <Link to='/'>Visit Home page</Link>
          </>}
        </article>
        </Link>
    </div>
  )
}

export default Post