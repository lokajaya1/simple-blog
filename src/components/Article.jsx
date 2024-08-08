import { useContext } from "react";
import { GlobalContext } from "../context";

const ArticleStatus = ({ isNew }) => {
  return isNew && <span> -- Baru !!!</span>;
};

function Article(props) {
  const user = useContext(GlobalContext);

  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <small>
          Date: {props.date}, tags: {props.tags.join(", ")}{" "}
          <ArticleStatus isNew={props.isNew} />
        </small>
        <div>
          <small>Dibuat oleh {user.username}</small>
        </div>
        <div>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
