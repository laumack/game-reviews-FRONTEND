import { getReviewById } from "../utils.js";
import { Link } from "react-router-dom";

export default function ReviewCard({
  title,
  category,
  reviewImgUrl,
  createdAt,
  reviewId,
}) {
  
  return (
    <article>
      <h3>{title}</h3>
      <p>Category: {category}</p>
      <img src={reviewImgUrl} alt={title} className="review-img"></img>
      <p>Date: {createdAt}</p>
      <Link to={`/reviews/${reviewId}`}className="reviewLink"
      >Read this review</Link>
    </article>
  );
}
