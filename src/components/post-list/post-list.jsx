import "./post-list.css";

import PostListItem from "../post-list-item/post-list-item";
import { ListGroup } from "reactstrap";

function PostList({ posts }) {
  const elements = posts.map((item) => {
    return (
      <ul key={item.id} className="list-gruop-item">
        <PostListItem label={item.label} important={item.important} />
      </ul>
    );
  });

  return <ListGroup className="app-list">{elements}</ListGroup>;
}

export default PostList;
