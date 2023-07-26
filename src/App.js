import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import MovieListPage from "./components/MovieListPage/MovieListPage";
import MovieTheater from "./components/MovieTheater/MovieTheater";
import MyList from "./components/MyList/MyList";
import LoginRegisterPage from "./components/authentication/LoginRegisterPage";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieListPage" element={<MovieListPage />} />
        <Route
          path="/Movie/:videoKey/:id/:trailerNumber"
          element={<MovieTheater />}
        />
        <Route
          path="/MyList"
          element={isAuthenticated ? <MyList /> : <Navigate to="/auth" />}
        />
        <Route path="/auth" element={<LoginRegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
