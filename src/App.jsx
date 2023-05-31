import "./App.css";
import Nav from "./components/Nav";
import MainHeader from "./components/MainHeader";
import ReviewsList from "./components/ReviewsList";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <section>
        <Nav />
        <MainHeader />
        <ReviewsList />
    </section>
  );
}
