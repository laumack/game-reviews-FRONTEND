import { useEffect, useState } from "react";
import { getReviewById } from "../utils.js";
import { useParams } from "react-router-dom";
import Comments from "./Comments.jsx";

export default function ReviewById() {
  const { reviewId } = useParams();
  const [idReview, setIdReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviewById(reviewId).then(({ review }) => {
      setIdReview(review);
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
    <main id="main">
      <article className="review-container">
        <h2 id="item-title">{idReview.title}</h2>
        <h3 id="item-cat">Category: {idReview.category}</h3>
        <p id="item-body">{idReview.review_body}</p>
        <img
          src={idReview.review_img_url}
          alt={idReview.title}
          title={idReview.title}
          id="item-img"
        ></img>
        <p id="item-des">
          Game designer: <br />
          {idReview.designer}
        </p>
        <h4 id="item-auth">Written by: {idReview.owner}</h4>
        <p id="item-date">
                  Date of review:{" "}
                  {new Date(idReview.created_at)
                    .toISOString()
                    .replace(/T.*/, "")
                    .split("-")
                    .reverse()
                    .join("-")}
                </p>
        <p id="item-vote">
          Votes: <b>{idReview.votes}</b>
        </p>
        
        
      </article>
      <Comments />
    </main>
  );
}
