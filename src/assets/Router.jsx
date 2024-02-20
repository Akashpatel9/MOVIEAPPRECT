import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Trending from "../components/Trending";
import Popular from "../components/Popular";
import TvShows from "../components/TvShows";
import People from "../components/People";
import Movies from "../components/Movies";
import MovieDetails from "../components/MovieDetails";
import PersonDetails from "../components/PersonDetails";
import Trailer from "../components/partials/Trailer";
import TvShowDetails from "../components/TvShowDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/trending" element={<Trending />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/movie" element={<Movies />} />
      <Route path="/movie/details/:id" element={<MovieDetails />}>
        <Route path="/movie/details/:id/trailer" element={<Trailer />} />
      </Route>
      <Route path="/tv" element={<TvShows />} />
      <Route path="/tv/details/:id" element={<TvShowDetails />}>
        <Route path="/tv/details/:id/trailer" element={<Trailer />} />
      </Route>
      <Route path="/person" element={<People />} />
      <Route path="/person/details/:id" element={<PersonDetails />} />
    </Routes>
  );
};

export default Router;
