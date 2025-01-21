import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = ({posts,editTitle,setEditTitle,editBody,setEditBody,handleEdit}) => {
    const {id} = useParams()
    const post = posts.find(post => post.id == id)
    // console.log(post)

    useEffect( () =>
    {
        if(post)
        {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    },[post,setEditTitle,setEditBody])
    
  return (
    <div className='newpost' >
        <h2>Edit Post</h2>
        <form action="" className='navigation' onSubmit={(e) => e.preventDefault()}>
            <input 
            type="text"
            placeholder='Title'
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            />
            <textarea
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
            >
            </textarea>
            <button
            onClick={(e) => handleEdit(id,editTitle,editBody)}
            >Submit</button>
        </form>
    </div>
  )
}

export default EditPost