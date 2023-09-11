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

export function patchReview(reviewId) {
  return gamesApi
    .patch(`/reviews/${reviewId}`, { inc_votes: 1 })
    .then((res) => {
      return res.data;
    });
}
