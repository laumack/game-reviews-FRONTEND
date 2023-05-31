import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-xkym.onrender.com/api",
});

export function getAllReviews() {
  return gamesApi.get("/reviews").then((res) => {
    console.log(res);
    return res.data;
  });
}
