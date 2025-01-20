import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  
  return (
    <div>
        <Link to={`newpost/${post.id}`} className='postlink'>
        <article className='post'>
            <h3>{post.title}</h3>
            <p>{post.datetime}</p>
            <p>{(post.body).length <= 25 ? post.body 
            : `${(post.body).slice(0,25)}...`}</p>
        </article>
        </Link>
    </div>
  )
}

export default Post