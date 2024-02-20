import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGYwZTdiY2UwOWNjNjA1OTM1ODRiM2I1ZGEyZWJmZSIsInN1YiI6IjY1Y2M2NjI2NGEwYjE5MDE4NmNlYWYwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dIs8r6VGYqQokGPJloVaEjlv-ul-REWGPzC0rnvXj8w",
  },
});

export default instance;