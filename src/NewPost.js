import React from 'react'

const NewPost = ({postTitle,setPostTitle,postBody,setPostBody,handleSubmit}) => {
  return (
    <div className='newpost' onSubmit={(e)=> e.preventDefault()}>
        <form action="" className='navigation'>
            <input 
            type="text"
            placeholder='Title'
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            />
            <textarea
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            >
            </textarea>
            <button
            onClick={() => handleSubmit(postTitle,postBody)}
            >Submit</button>
        </form>
    </div>
  )
}

export default NewPost