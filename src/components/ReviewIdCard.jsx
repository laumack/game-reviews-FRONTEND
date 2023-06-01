import { useEffect, useState } from "react";
import { getReviewById } from "../utils.js";
import { useParams } from "react-router-dom";

export default function ReviewIdCard() {
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
    <article className="review-container">
      <h2 id="item-a">{idReview.title}</h2>
      <h3 id="item-b">Category: {idReview.category}</h3>
      <p id="item-c">{idReview.review_body}</p>
      <img src={idReview.review_img_url} alt={idReview.title} id="item-d"></img>
      <h4 id="item-e">Written by: {idReview.owner}</h4>
      <p id="item-f">
        Votes: <b>{idReview.votes}</b>
      </p>
    </article>
  );
}
