import { useLoaderData } from "react-router-dom";

function SinglePost() {
  const post = useLoaderData();

  return (
    <div>
      <h2>{post?.title}</h2>
      <div>{post?.body}</div>
    </div>
  );
}

export default SinglePost;
