import "../styling/ReviewById.css";
import { useEffect, useState } from "react";
import { getReviewById } from "../utils.js";
import { patchReview } from "../utils.js";
import { useParams } from "react-router-dom";
import Comments from "./Comments.jsx";

export default function ReviewById() {
  const { reviewId } = useParams();
  const [idReview, setIdReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);


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


  const amendVote = (increment) => {
    setIdReview((currIdReview) => {
      let copyCurrIdReview = { ...currIdReview };
      copyCurrIdReview.votes = copyCurrIdReview.votes + increment;
      setErr(null);
      setSuccessMessage("Your vote has been counted!");
      setTimeout(clearSuccessMessage, 3000);
      return copyCurrIdReview;
    });

    patchReview(reviewId, increment).catch((err) => {
      setIdReview((currIdReview) => {
        let copyCurrIdReview = { ...currIdReview };
        copyCurrIdReview.votes = copyCurrIdReview.votes - increment;
        setErr("Something went wrong, please try your vote again...");
        setSuccessMessage(null);
        return copyCurrIdReview;
      });
    });
  };

  const clearSuccessMessage = () => {
    setSuccessMessage(null);
  };


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
      <section className="vote-buttons-container">
        <button
          id="vote-buttons"
          type="button"
          title="increase vote"
          onClick={() => amendVote(1)}
        >
          👍 Like this review
        </button>
        <button
          id="vote-buttons"
          type="button"
          title="decrease vote"
          onClick={() => amendVote(-1)}
        >
          👎 Dislike this review
        </button>
        {err ? <p id="status-message">{err}</p> : null}
        {successMessage && <p id="status-message">{successMessage}</p>}
      </section>
      <Comments />
    </main>
  );
}
