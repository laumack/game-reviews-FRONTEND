// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewIdCard from "./ReviewIdCard";
// import { getReviewById } from "../utils.js";

export default function ReviewById() {
  const { reviewId } = useParams();

  return (
    <section>
      <ReviewIdCard reviewId={reviewId} />
    </section>
  );
}
