import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-xkym.onrender.com/api",
});

export function getAllReviews() {
  return gamesApi.get("/reviews").then((res) => {
    return res.data;
  });
}

export function getReviewById(reviewId) {
  return gamesApi.get(`/reviews/${reviewId}`).then((res) => {
    return res.data;
  });
}

export function getComments(reviewId) {
  return gamesApi.get(`/reviews/${reviewId}/comments`).then((res) => {
    return res.data;
  });
}

export function patchReview(reviewId, increment) {
  return gamesApi
    .patch(`/reviews/${reviewId}`, { inc_votes: increment })
    .then((res) => {
      return res.data;
    });
}
