import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewPost = ({posts,handleDelete}) => {
    const {id} = useParams()
    const post = posts.find(post => post.id === id)
  return (
    <div>
        <article className='post'>
           {post && 
           <>
            <h3>{post.title}</h3>
            <p>{post.datetime}</p>
            <p>{post.body}</p>

            <button
            onClick={()=>handleDelete(post.id)}
            >Delete</button>
            <Link to='edit'>
             <button>Edit</button>
            </Link>
           </>
           }
        </article>
        
    </div>
  )
}

export default ViewPost
