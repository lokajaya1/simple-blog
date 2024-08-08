import Article from "../components/Article";
import postsData from "../postsData.json";
import Search from "../components/Search";
import { useEffect, useState } from "react";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);

  const onSearchChange = (value) => {
    console.log(value);
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setExternalPosts(json))
  }, []);

  useEffect (() => (
    console.log('Post Baru')
  ),[posts]);

  return (
    <div>
      <h1>Welcome to my Simple Blog</h1>
      <Search searchChange={onSearchChange} totalPosts={totalPosts}/>
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </div>
  );
}

export default Homepage;
