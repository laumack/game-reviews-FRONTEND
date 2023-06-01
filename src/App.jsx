import Nav from "./components/Nav";
import Header from "./components/Header";
import ReviewsList from "./components/ReviewsList";
import ReviewById from "./components/ReviewById";
import { Route, Routes } from "react-router-dom";
import Comments from "./components/Comments";

export default function App() {
  return (
    <>
      <a href="#main" className="skip">Skip to main content</a>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<ReviewsList />}></Route>
        <Route path="/reviews/:reviewId" element={<ReviewById />}></Route>
        <Route path="/reviews/:reviewId" element={<Comments />}></Route>
      </Routes>
      <footer>Footer - under construction</footer>
    </>
  );
}
