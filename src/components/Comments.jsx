import "../styling/Comments.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils.js";

export default function Comments() {
  const { reviewId } = useParams();
  const [commentsById, setCommentsById] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(reviewId).then(({ comments }) => {
      setCommentsById(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <section className="loading">
        ...loading...
        <br />
        please wait
      </section>
    );

  if (commentsById.length === 0) {
    return (
      <>
        <section className="comments-header">
          <h2 id="title-comment">Comments</h2>
          <h3 id="title-user">Username</h3>
          <h3 id="title-votes">Votes</h3>
        </section>
        <p id="no-comments">No comments yet...</p>
      </>
    );
  }

  return (
    <>
      <section className="comments-header">
        <h2 id="title-comment">Comments</h2>
        <h3 id="title-user">Username</h3>
        <h3 id="title-votes">Votes</h3>
      </section>
      {commentsById.map(({ comment_id, body, author, votes, created_at }) => {
        return (
          <article key={comment_id} className="comments-content">
            <p id="item-comment">{body}</p>
            <h3 id="item-user">{author}</h3>
            <p id="item-date">
              {new Date(created_at)
                .toISOString()
                .replace(/T.*/, "")
                .split("-")
                .reverse()
                .join("-")}
            </p>
            <h3 id="item-votes">{votes}</h3>
          </article>
        );
      })}
    </>
  );
}
