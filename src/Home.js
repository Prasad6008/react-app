import React from 'react'
import PostPage from './PostPage'

const Home = ({posts,setPosts}) => {
  return (
    <div className='content'>
        {(posts.length ? 
          <PostPage
          posts = {posts}
          setPosts = {setPosts}
          />    
        :
        <p>No posts to show</p>)}
    </div>
  )
}

export default Home