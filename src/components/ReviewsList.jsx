import "../styling/ReviewsList.css"
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { getAllReviews } from "../utils.js";

export default function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllReviews().then(({ reviews }) => {
      setReviews(reviews);
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
  
  // <iframe src="https://giphy.com/embed/1vY8RboCYg4wM" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/thread-running-alizarin-1vY8RboCYg4wM">via GIPHY</a></p>

  return (
    <main id="main" className="review-page">
      <h2>All Reviews</h2>
      <section className="all-reviews-container">
        {reviews.map(
          ({ review_id, title, category, review_img_url, created_at }) => {
            return (
              <ReviewCard
                className="review-card"
                key={review_id}
                title={title}
                category={category}
                reviewImgUrl={review_img_url}
                createdAt={new Date(created_at)
                  .toISOString()
                  .replace(/T.*/, "")
                  .split("-")
                  .reverse()
                  .join("-")}
                reviewId={review_id}
              />
            );
          }
        )}
      </section>
    </main>
  );
}
