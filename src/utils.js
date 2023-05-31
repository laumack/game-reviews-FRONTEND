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
  return gamesApi.get(`/reviews/?review_id=${reviewId}`).then((res) => {
    return res.data;
  });
} //this will be called on the new page
