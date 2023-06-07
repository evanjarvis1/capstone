import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import MovieListPage from "./components/MovieListPage/MovieListPage";
import MovieTheater from "./components/MovieTheater/MovieTheater";
import MyList from "./components/MyList";
import LoginRegisterPage from "./components/authentication/LoginRegisterPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieListPage" element={<MovieListPage />} />
        <Route path="/Movie/:videoKey/:id" element={<MovieTheater />} />
        <Route path="/MyList" element={<MyList />} />
        <Route path="/auth" element={<LoginRegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
