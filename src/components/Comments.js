import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCard from "./CommentCard"

const Comments = ({ match }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?postId=${match.params.id}`
      )
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchComments();
  }, [match]);

  return (
    <div className="container ">
      <div className="row"></div>

      <div className="container post-container">
        {comments.map((com, key) => (
          <CommentCard comment={com} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
