import "./App.css";
import Nav from "./components/Nav";
import MainHeader from "./components/MainHeader";
import ReviewsList from "./components/ReviewsList";
import ReviewIdCard from "./components/ReviewIdCard";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <section>
      <Nav />
      <MainHeader />
      <Routes>
        <Route path="/" element={<ReviewsList />}></Route>
        <Route path="/reviews/:reviewId" element={<ReviewIdCard />}></Route>
      </Routes>
      <footer>Footer - under construction</footer>
    </section>
  );
}
