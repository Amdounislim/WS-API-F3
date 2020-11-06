import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="col-md-8 offset-2 my-4">
      <div className="card" style={{ width: "50rem" }}>
        <img
          src="https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2018/11/meilleure-banque-image.jpg"
          alt="fixed"
          className="card-img-top"
        />
        <Link to={`/posts/${post.id}`}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Post;
