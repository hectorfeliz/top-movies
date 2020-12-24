import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";

import CardActionArea from "@material-ui/core/CardActionArea";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { ListItemIcon } from "@material-ui/core";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import MovieIcon from "@material-ui/icons/Movie";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import LabelIcon from "@material-ui/icons/Label";
import LinkIcon from "@material-ui/icons/Link";

import "../css/Movie.css";

function MovieCard({ id, position, info, img }) {
  var genres = [],
    stars = [],
    directors = [];

  for (const gen of info.genres.slice(0, 3)) {
    genres.push(<Chip size="small" key={gen} label={gen} />);
  }

  for (const director of info.directors.slice(0, 2)) {
    directors.push(<Chip size="small" key={director} label={director} />);
  }

  for (const star of info.stars.slice(0, 6)) {
    stars.push(<Chip color="primary" size="small" key={star} label={star} />);
  }

  let poster = img ? (
    <CardMedia component="img" image={img} title={info.title} />
  ) : (
    ""
  );

  let imbd_link = (
    <Button
      variant="outlined"
      target="_blank"
      color="primary"
      href={`https://www.imdb.com/title/${info.imdb_id}/`}
    >
      {" "}
      View on IMDB
    </Button>
  );

  return id ? (
    <Card id={`movie-${id}`} variant="outlined" className="Movie__card">
      <CardHeader
        component={`h2`}
        avatar={<Avatar aria-label="Position">#{position}</Avatar>}
        title={info.title}
        subheader={info.year}
      />

      {poster}

      <CardActionArea>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem key="rating">
            <ListItemIcon>
              <ThumbUpIcon />
            </ListItemIcon>
            <ListItemText
              secondary={`IMBD Rating (${info.vote_count} votes)`}
              primary={info.imdb_rating}
            />
          </ListItem>

          <ListItem key="genres">
            <ListItemIcon>
              <LabelIcon />
            </ListItemIcon>
            <ListItemText primary="Genres" secondary={genres} />
          </ListItem>

          <ListItem key="directors">
            <ListItemIcon>
              <MovieIcon />
            </ListItemIcon>
            <ListItemText primary="Director(s)" secondary={directors} />
          </ListItem>

          <ListItem key="actor">
            <ListItemIcon>
              <RecentActorsIcon />
            </ListItemIcon>
            <ListItemText primary="Stars" secondary={stars} />
          </ListItem>

          <ListItem key="link">
            <ListItemIcon>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText primary="Link" primary={imbd_link} />
          </ListItem>
        </List>
      </CardActionArea>
    </Card>
  ) : (
    <span>Loading movie...</span>
  );
}

export default MovieCard;
