// import React, { useState } from 'react'
// import Header from './Header'
// import Nav from './Nav'
// import Home from './Home'
// import NewPost from './NewPost'
// import About from './About'
// import { format } from 'date-fns'
// import Missing from './Missing'
// import { Routes,Route, useNavigate } from 'react-router-dom'
// import ViewPost from './ViewPost'

// const App = () => {

//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       title: "My First Post",
//       datetime: "July 01, 2021 11:17:36 AM",
//       body: "Made a video about Tesla Q1 results"
//     },
//     {
//       id: 2,
//       title: "My 2nd Post",
//       datetime: "July 01, 2021 11:17:36 AM",
//       body: "I attended a DeFi blockchain event"
//     },
//     {
//       id: 3,
//       title: "My 3rd Post",
//       datetime: "July 01, 2021 11:17:36 AM",
//       body: "Web3 global summit next week"
//     },
//     {
//       id: 4,
//       title: "My Fourth Post",
//       datetime: "July 01, 2021 11:17:36 AM",
//        body: "ETH will outperform BTC"
//     }
// ])

// const title = "SOCIAL MEDIA APP"

// const [search,setSearch] = useState('')
// const [postTitle,setPostTitle] = useState('')
// const [postBody,setPostBody] = useState('')

// const navigate = useNavigate()

// const handleSubmit = (e) =>
// {
//   e.preventDefault()
//   setPostTitle('')
//   setPostBody('')

//   const id = posts.length ?  posts[posts.length-1].id + 1 : 1
//   const datetime = format(new Date(),'MMMM dd, yyyy pp')
//   const asObj = {id:id,title:postTitle,datetime:datetime,body:postBody}
//   const post = [...posts,asObj]
//   setPosts(post)
//   navigate('/')
// }

// const handleDelete = (id) =>
// {
//   console.log(id)
//   const final = posts.filter( post => post.id !== id)
//   console.log(final)
//   setPosts(final)
//   navigate('/')
// }

//   return (
//     <main>
//       <Header
//       title = {title}
//       />

//       <Nav
//       search = {search}
//       setSearch  = {setSearch}
//       />

// <Routes>

//       <Route path='/' element ={
//       <Home
//       posts = { (posts.filter(post => 
//       ((post.title).toLowerCase()).includes(search.toLowerCase()) ||
//       ((post.body).toLowerCase()).includes(search.toLowerCase())
//       )).reverse()}
//       /> }/>


//       <Route path='/newpost' element={
//       <NewPost
//       postTitle = {postTitle}
//       setPostTitle = {setPostTitle}

//       postBody = {postBody}
//       setPostBody = {setPostBody}
//       handleSubmit = {handleSubmit}
//       /> } />

//       <Route path=':id' element={<ViewPost 
//       posts = {posts}
//       handleDelete = {handleDelete}
//       />}/>

//       <Route path='/about' element={
//       <About/>}/>

//       <Route path={'/*'} element={<Missing/>}/>

// </Routes>    

//     </main>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Header from './Header'
// import Nav from './Nav'
// import Home from './Home'
// import NewPost from './NewPost'
// import About from './About'
// import { format } from 'date-fns'
// import Missing from './Missing'
// import { Routes,Route, useNavigate } from 'react-router-dom'
// import ViewPost from './ViewPost'

// const App = () => {

//   const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('Posts')))

// const title = "SOCIAL MEDIA APP"

// const [search,setSearch] = useState('')
// const [postTitle,setPostTitle] = useState('')
// const [postBody,setPostBody] = useState('')

// const navigate = useNavigate()

// const handleSubmit = (e) =>
// {
//   e.preventDefault()
//   setPostTitle('')
//   setPostBody('')

//   const id = posts.length ?  posts[posts.length-1].id + 1 : 1
//   const datetime = format(new Date(),'MMMM dd, yyyy pp')
//   const asObj = {id:id,title:postTitle,datetime:datetime,body:postBody}
//   const post = [...posts,asObj]
//   setPosts(post)
//   navigate('/')
//   localStorage.setItem('Posts',JSON.stringify(post))
// }

// const handleDelete = (id) =>
// {
//   console.log(id)
//   const final = posts.filter( post => post.id !== id)
//   console.log(final)
//   setPosts(final)
//   navigate('/')
//   localStorage.setItem('Posts',JSON.stringify(final))
// }

//   return (
//     <main>
//       <Header
//       title = {title}
//       />

//       <Nav
//       search = {search}
//       setSearch  = {setSearch}
//       />

// <Routes>

//       <Route path='/' element ={
//       <Home
//       posts = { (posts.filter(post => 
//       ((post.title).toLowerCase()).includes(search.toLowerCase()) ||
//       ((post.body).toLowerCase()).includes(search.toLowerCase())
//       )).reverse()}
//       /> }/>


//       <Route path='/newpost' element={
//       <NewPost
//       postTitle = {postTitle}
//       setPostTitle = {setPostTitle}

//       postBody = {postBody}
//       setPostBody = {setPostBody}
//       handleSubmit = {handleSubmit}
//       /> } />

//       <Route path=':id' element={<ViewPost 
//       posts = {posts}
//       handleDelete = {handleDelete}
//       />}/>

//       <Route path='/about' element={
//       <About/>}/>

//       <Route path={'/*'} element={<Missing/>}/>

// </Routes>    

//     </main>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'
// import Header from './Header'
// import Nav from './Nav'
// import Home from './Home'
// import NewPost from './NewPost'
// import About from './About'
// import { format } from 'date-fns'
// import Missing from './Missing'
// import { Routes,Route, useNavigate } from 'react-router-dom'
// import ViewPost from './ViewPost'
// import apiReq from './apiRequest'

// const App = () => {

//   const APL_LINK = "http://localhost:3500/posts"

//   const [fetchError,setfetchError] = useState('')
//   const [isLosding,setIsloading] = useState(true)

//   useEffect( () =>
//   {
//     const fetchData = async() =>
//     {
//       try
//       {
//         const responses = await fetch(APL_LINK)
//         if(!responses.ok) throw Error("Data not found")
//         const jsformat = await responses.json()
//         setPosts(jsformat)
//       }
//       catch(err)
//       {
//         setfetchError(err)
//       }
//       finally 
//       {
//         setIsloading(false)
//       }
      
//     }
//     setTimeout( () =>
//     {
//       fetchData()
//     },2000)
//   },[])

// const [posts, setPosts] = useState([])



// const title = "SOCIAL MEDIA APP"

// const [search,setSearch] = useState('')
// const [postTitle,setPostTitle] = useState('')
// const [postBody,setPostBody] = useState('')

// const navigate = useNavigate()

// const handleSubmit = async(e) =>
// {
//   e.preventDefault()
//   setPostTitle('')
//   setPostBody('')

//   const id = posts.length ?  String(Number(posts[posts.length-1].id) + 1) : "1"
//   const datetime = format(new Date(),'MMMM dd, yyyy pp')
//   const asObj = {id:id,title:postTitle,datetime:datetime,body:postBody}
//   const post = [...posts,asObj]
//   setPosts(post)
//   navigate('/')

//   const mode = {
//     method : 'POST',
//     headers : { 'Content-Type' : 'application/json'},
//     body : JSON.stringify(asObj)
//   }

//   const result = await apiReq(APL_LINK,mode)

//   if(result) setfetchError(result)
// }

// const handleDelete = async(id) =>
// {
//   const final = posts.filter( post => post.id !== id)
//   setPosts(final)
//   navigate('/')


//   const mode = {
//     method : 'DELETE'
//   }

//   const reqURL = `${APL_LINK}/${String(id)}`
//   const result = await apiReq(reqURL,mode)

//   if(result) setfetchError(result)
// }

//   return (
//     <main>
      
//       <Header
//       title = {title}
//       />

//       <Nav
//       search = {search}
//       setSearch  = {setSearch}
//       />

// {fetchError && <p>{`${fetchError}`}</p> }
// {isLosding && <p>{`Loading...`}</p>}

// {!fetchError && !isLosding &&
// <>
// <Routes>

//       <Route path='/' element ={
//       <Home
//       posts = { (posts.filter(post => 
//       ((post.title).toLowerCase()).includes(search.toLowerCase()) ||
//       ((post.body).toLowerCase()).includes(search.toLowerCase())
//       )).reverse()}
//       /> }/>


//       <Route path='/newpost' element={
//       <NewPost
//       postTitle = {postTitle}
//       setPostTitle = {setPostTitle}

//       postBody = {postBody}
//       setPostBody = {setPostBody}
//       handleSubmit = {handleSubmit}
//       /> } />

//       <Route path=':id' element={<ViewPost 
//       posts = {posts}
//       handleDelete = {handleDelete}
//       />}/>

//       <Route path='/about' element={
//       <About/>}/>

//       <Route path={'/*'} element={<Missing/>}/>

// </Routes> 
// </>}

//     </main>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'
// import Header from './Header'
// import Nav from './Nav'
// import Home from './Home'
// import NewPost from './NewPost'
// import About from './About'
// import { format } from 'date-fns'
// import Missing from './Missing'
// import { Routes,Route, useNavigate } from 'react-router-dom'
// import ViewPost from './ViewPost'
// import postAPI from './postAPI'
// import EditPost from './EditPost'

// const App = () => {

//   const [posts, setPosts] = useState([])

//   useEffect( () =>
//   {
//     const fetchPosts = async() =>
//     {
//       try
//       {
//         const responses = await postAPI.get('/posts')
//         setPosts(responses.data)
//       }
//       catch(err)
//       {
//         if(err.responses)
//         {
//           console.log(err.responses.data)
//           console.log(err.responses.headers)
//           console.log(err.responses.status)
//         }
//         else
//         {
//           console.log(err.message)
//         }
//       }
//     }
//     fetchPosts()
//   },[])
  

// const title = "SOCIAL MEDIA APP"

// const [search,setSearch] = useState('')
// const [postTitle,setPostTitle] = useState('')
// const [postBody,setPostBody] = useState('')

// const navigate = useNavigate()

// const handleSubmit = async(e) =>
// {
//   e.preventDefault()
//   setPostTitle('')
//   setPostBody('')

//   const id = posts.length ?  String(Number(posts[posts.length-1].id) + 1) : "1"
//   const datetime = format(new Date(),'MMMM dd, yyyy pp')
//   const asObj = {id:id,title:postTitle,datetime:datetime,body:postBody}

//   try
//   {
//     const responses = await postAPI.post('/posts',asObj)
//     const post = [...posts,responses.data]
//     setPosts(post)
//     navigate('/')
//   }
//   catch(err)
//   {
//     console.log(err.message)
//   }
// }

// const handleDelete = async(id) =>
// {
//   const final = posts.filter( post => post.id !== id)
//   try
//   {
//     await postAPI.delete(`/posts/${String(id)}`)
//     setPosts(final)
//     navigate('/')
//   }
//   catch(err)
//       {
//         console.log(err.message)
//       }
// }

// const handleEdit = async(id,Editedtitle,Editedbody)=>
// {
//   const datetime = format(new Date(),'MMMM dd, yyyy pp')
//   const asObj = {id:id,title:Editedtitle,datetime:datetime,body:Editedbody}
//   console.log(asObj)

//   try
//   {
//     const responses = await postAPI.put(`/posts/${String(id)}`,asObj)
//     setPostTitle('')
//     setPostBody('')
//     setPosts(posts.map( post => post.id === id ? {...responses.data}: responses.data) )
//     navigate('/') 
//   }catch(err)
//   {
//     console.log(err.message)
//   }
// }

//   return (
//     <main>
//       <Header
//       title = {title}
//       />

//       <Nav
//       search = {search}
//       setSearch  = {setSearch}
//       />

// <Routes>

//       <Route path='/' element ={
//       <Home
//       posts = { (posts.filter(post => 
//       ((post.title).toLowerCase()).includes(search.toLowerCase()) ||
//       ((post.body).toLowerCase()).includes(search.toLowerCase())
//       )).reverse()}
//       /> }/>


//       <Route path='/newpost'>

//         <Route index element={
//         <NewPost
//         postTitle = {postTitle}
//         setPostTitle = {setPostTitle}

//         postBody = {postBody}
//         setPostBody = {setPostBody}
//         handleSubmit = {handleSubmit}
//         /> } />

//         <Route path=':id' element={<ViewPost 
//         posts = {posts}
//         handleDelete = {handleDelete}
//         />}/>

//       </Route>

//       <Route path='/about' element={
//       <About/>}/>

//       <Route path={'/*'} element={<Missing/>}/>

//       <Route path='/editpost'>

//         <Route path=':id' element={<EditPost
//         posts = {posts}
//         handleEdit={handleEdit}
//         />}></Route>

//       </Route>

// </Routes>

//     </main>
//   )
// }

// export default App



//=======================================================================
// //Create Read Operations:  MY TRY:::::::::::::::::::::::::
// import React, { useEffect, useState } from 'react'
// import Header from './Header'
// import Nav from './Nav'
// import { Route, Routes, useNavigate } from 'react-router-dom'
// import Home from './Home'
// import NewPost from './NewPost'
// import Missing from './Missing'
// import { format } from 'date-fns'

// const App = () => {
//   const title = "SOCIAL MEDIA APP"

//   const [posts,setPosts] = useState(
//     [
//       {
//         id: 1,
//         title: "My First Post",
//         datetime: "July 01, 2021 11:17:36 AM",
//         body: "Made a video about Tesla Q1 results"
//       },
//       {
//         id: 2,
//         title: "My 2nd Post",
//         datetime: "July 01, 2021 11:17:36 AM",
//         body: "I attended a DeFi blockchain event"
//       },
//       {
//         id: 3,
//         title: "My 3rd Post",
//         datetime: "July 01, 2021 11:17:36 AM",
//         body: "Web3 global summit next week"
//       },
//       {
//         id: 4,
//         title: "My Fourth Post",
//         datetime: "July 01, 2021 11:17:36 AM",
//          body: "ETH will outperform BTC"
//       }
//   ])
//   const [search,setSearch] = useState('')
//   const [searchResults,setSearchResults] = useState('')
  
//   const [postTitle,setPostTitle] = useState('')
//   const [postBody,setPostBody] = useState()

//   const navigate = useNavigate()

//   useEffect( () =>
//   {
//     const filtered = posts.filter( post => 
//     ((post.title).toLowerCase()).includes(search.toLowerCase()) ||
//     ((post.body).toLowerCase()).includes(search.toLowerCase())
//   )
//   setSearchResults(filtered.reverse())
//   },[posts,search])

//   const handleSubmit = (postTitle,postBody) =>
//   {
//     const id = posts.length ? posts[posts.length-1].id + 1: 1
//     const datetime = format(new Date,'MMMM dd,yyyy pp')
//     const asObj = {id:id,title:postTitle,datetime:datetime,body:postBody}
//     const post = [...posts,asObj]
//     setPosts(post)
//     navigate('/')
//   }
//   return (
//     <div>

//       <Header
//       title = {title}
//       />

//       <Nav
//       search = {search}
//       setSearch  = {setSearch}
//       />

//     <Routes>
//         <Route path='/' element={<Home
//         posts={searchResults}
//         setPosts = {setPosts}
//         />}/>

//          <Route path='/newpost' element={<NewPost
//          postTitle = {postTitle}
//          setPostTitle = {setPostTitle}
//          postBody = {postBody}
//          setPostBody = {setPostBody}
//          handleSubmit = {handleSubmit}
//          />}/>


//          <Route path='*' element={<Missing/>}/>
//     </Routes>

//     </div>
//   )
// }

// export default App
//==========================================================================


//Create Read  Delete Operations:
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Nav from './Nav'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import NewPost from './NewPost'
import Missing from './Missing'
import { format } from 'date-fns'
import About from './About'
import ViewPost from './ViewPost'
import api from './api'
import EditPost from './EditPost'

const App = () => {
  const title = "SOCIAL MEDIA APP"

  const [posts,setPosts] = useState([])
  // const [posts,setPosts] = useState(
  //   [
      // {
      //   id: 1,
      //   title: "My First Post",
      //   datetime: "July 01, 2021 11:17:36 AM",
      //   body: "Made a video about Tesla Q1 results"
      // },
      // {
      //   id: 2,
      //   title: "My 2nd Post",
      //   datetime: "July 01, 2021 11:17:36 AM",
      //   body: "I attended a DeFi blockchain event"
      // },
      // {
      //   id: 3,
      //   title: "My 3rd Post",
      //   datetime: "July 01, 2021 11:17:36 AM",
      //   body: "Web3 global summit next week"
      // },
      // {
      //   id: 4,
      //   title: "My Fourth Post",
      //   datetime: "July 01, 2021 11:17:36 AM",
      //    body: "ETH will outperform BTC"
      // }
  // ])

  useEffect( () =>
  {
    const fetchData = async() => 
    {
      try{
        const responses = await api.get('/posts')
        setPosts(responses.data)
      }catch(err)
      {
        console.log(err)
      }
    }
    fetchData()
  },[])
  

  const [search,setSearch] = useState('')
  const [searchResults,setSearchResults] = useState('')
  
  const [postTitle,setPostTitle] = useState('')
  const [postBody,setPostBody] = useState()


  const [editTitle,setEditTitle] = useState('')
  const [editBody,setEditBody] = useState('')

  const navigate = useNavigate()

  useEffect( () =>
  {
    const filtered = posts.filter( post => 
    ((post.title).toLowerCase()).includes(search.toLowerCase()) ||
    ((post.body).toLowerCase()).includes(search.toLowerCase())
  )
  setSearchResults(filtered.reverse())
  },[posts,search])

  const handleSubmit = async(postTitle,postBody) =>
  {
    const id = posts.length ? String(Number(posts[posts.length-1].id) + 1): "1"
    const datetime = format(new Date,'MMMM dd,yyyy pp')
    const asObj = {id:id,title:postTitle,datetime:datetime,body:postBody}

    const responses = await api.post('/posts',asObj)

    const post = [...posts,responses.data]
    setPosts(post)
    navigate('/')
    setPostTitle('')
    setPostBody('')
  }

  const handleDelete = async(id) =>
  {
    console.log(id)
    const final = posts.filter( post => post.id !== id)

    try 
    {
      await api.delete(`/posts/${String(id)}`)
      setPosts(final)
      navigate('/')

    }catch(err)
    {
      console.log(err)
    } 
  }

  const handleEdit = async(id) =>
  {
    
    const datetime = format(new Date,'MMMM dd yyyy pp')
    const asObj = {id:id,title:editTitle,datetime:datetime,body:editBody}
    
    console.log(asObj)
    try 
    {
      const res = await api.put(`/posts/${String(id)}`,asObj)
      console.log(res.data)
      setEditTitle('')
      setEditBody('')
      setPosts(posts.map( post => post.id === id ? {...res.data}:post))
      navigate('/')
      
    }catch(err)
    {
      console.log(err)
    }
  }

  

  return (
    <div>

      <Header
      title = {title}
      />

      <Nav
      search = {search}
      setSearch  = {setSearch}
      />

    <Routes>
        <Route path='/' element={<Home
        posts={searchResults}
        setPosts = {setPosts}
        />}/>

      <Route path='newpost' >
      <Route index element={<NewPost
         postTitle = {postTitle}
         setPostTitle = {setPostTitle}
         postBody = {postBody}
         setPostBody = {setPostBody}
         handleSubmit = {handleSubmit}
         />}/>

        <Route path=':id' >
            <Route index element={<ViewPost 
            posts={posts}
            handleDelete = {handleDelete}
            />}/>

            <Route path='edit' element={<EditPost
            posts = {posts}
            editTitle  = {editTitle} 
            setEditTitle  = {setEditTitle}
            editBody  = {editBody}
            setEditBody  = {setEditBody}
            handleEdit = {handleEdit}
            />} />
        </Route>

      </Route>

         <Route path='*' element={<Missing/>}/>

         <Route path='/about' element={<About/>}/>
         
    </Routes>

    </div>
  )
}

export default App