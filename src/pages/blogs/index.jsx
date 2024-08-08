import { Link, useLoaderData } from "react-router-dom";

function Blog() {
    const posts = useLoaderData();

  return (
    <div>
      <h2>External Post</h2>
      {posts.map((item, index) => (
        <div key={item.id}>
          <Link to={`/blog/${item.id}`}> - {item.title} </Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;
