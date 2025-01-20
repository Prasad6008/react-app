import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search,setSearch}) => {
  return (
    <form action="" className='navigation' onSubmit={(e)=> e.preventDefault()}>
        <input 
        type="text" 
        placeholder='Search items'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />

        <div className="links">
            <ul >
                <Link to='/'><li>Home</li></Link>
                <Link to='/newpost'><li>Post</li></Link>
                <Link to='/about'><li>About</li></Link>
            </ul>
        </div>
    </form>
  )
}

export default Nav