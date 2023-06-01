import "../styling/ReviewCard.css"
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
      <Link to={`/reviews/${reviewId}`} className="reviewLink">
        <img src={reviewImgUrl} alt={title} title={title}  className="all-reviews-img"></img>
      </Link>
      <p>Date: {createdAt}</p>
      <Link to={`/reviews/${reviewId}`}className="reviewLink"
      >Read this review</Link>
    </article>
  );
}
