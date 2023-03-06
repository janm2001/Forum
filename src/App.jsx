import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Post from './components/Post/Post';

function App() {
  const [posts,setPosts] = useState([]);
  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData = async () =>{
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err);
      })
  }

  

  

  
  

  return (
  <div className="app">
    <h1>Forum</h1>
    <div>
      {posts.map((post) => <Post title={post.title} id={post.id} key={post.id} user={post.userId} />)}
    </div>
  </div>
    
  )
}

export default App
