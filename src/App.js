import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./css/App.css";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);

  const handleChange = (event) => {
    const yr = event.target.value;

    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
      params: {
        type: "get-popular-movies",
        page: "1",
        limit: "1",
        year: yr,
      },
      headers: {
        "x-rapidapi-key": "89c20ee19cmshb9b1a97ffa75f6bp13b9a9jsn1a1284be8d95",
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        var i = 0;

        setMovies((movies) => []);

        for (const topMov of response.data.movie_results.slice(0, 10)) {
          options.params = {
            type: "get-movie-details",
            imdb: topMov.imdb_id,
          };

          axios
            .request(options)
            .then(function (response) {
              var mov = response.data;

              options.params = {
                type: "get-movies-images-by-imdb",
                imdb: topMov.imdb_id,
              };

              axios
                .request(options)
                .then(function (response) {
                  var img = response.data.poster ? response.data.poster : false;

                  setMovies((movies) => [
                    ...movies,
                    {
                      position: i + 1,
                      id: mov.imdb_id,
                      img: img,
                      data: mov,
                    },
                  ]);

                  i++;
                })
                .catch(function (error) {
                  setMovies((movies) => [
                    ...movies,
                    {
                      position: i + 1,
                      id: mov.imdb_id,
                      img: false,
                      data: mov,
                    },
                  ]);

                  i++;
                });
            })
            .catch(function (error) {
              console.error(error);
            });
        }
      })
      .catch(function (error) {
        console.log("ERROR axios");
        console.error(error);
      });
  };

  const getDropList = () => {
    const year = new Date().getFullYear();
    return Array.from(new Array(30), (v, i) => (
      <option key={i} value={year - i}>
        {year - i}
      </option>
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1>
            <img src={logo} className="App-logo" alt="logo" />
            Top 10 Movies Per Year
          </h1>
        </Container>
      </header>
      <Container>
        <FormControl>
          <InputLabel htmlFor="year-select">Select a year</InputLabel>
          <div>
            <Select
              native
              onChange={handleChange}
              inputProps={{
                id: "year-select",
              }}
            >
              <option id="yr" aria-label="None" value="" />
              {getDropList()}
            </Select>
          </div>
        </FormControl>
      </Container>

      <Container className="Movies">
        <Grid container justify="center" spacing={3}>
          {movies.length == 0
            ? ""
            : movies.map((mov) => (
                <Grid item xs={12} md={mov.position < 3 ? 6 : 4}>
                  <MovieCard
                    key={mov.id}
                    id={mov.id}
                    img={mov.img}
                    position={mov.position}
                    info={mov.data}
                  />
                </Grid>
              ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
