import "../styling/Comments.css";
import { useEffect, useState } from "react";
import { getComments } from "../utils.js";

export default function Comments() {
  const [commentsById, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(2).then(({ comments }) => {
      setComments(comments);
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

  return (
    <>
      <section className="comments-header">
        <h2 id="item-1">Comments</h2>
        <h3 id="item-2">Username</h3>
        <h3 id="item-3">Votes</h3>
      </section>
      {commentsById.map(({ comment_id, body, author, votes, created_at }) => {
        return (
          <article key={comment_id} className="comments-content">
            <p id="item-4">{body}</p>
            <h3 id="item-5">{author}</h3>
            <p id="item-6">
              {new Date(created_at)
                .toISOString()
                .replace(/T.*/, "")
                .split("-")
                .reverse()
                .join("-")}
            </p>
            <h3 id="item-7">{votes}</h3>
          </article>
        );
      })}
    </>
  );
}
