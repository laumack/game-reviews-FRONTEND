import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils.js";

export default function ReviewById() {
  const { reviewId } = useParams();
  console.log('reviewId: ', reviewId);

  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviewById(reviewId).then(({ review }) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [reviewId]);

  if (isLoading)
    return (
      <section className="loading">
        ...loading...
        <br />
        please wait
      </section>
    );

  return (
    <section>
      
    </section>
  );
}
