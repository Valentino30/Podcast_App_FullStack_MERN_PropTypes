import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import { Container } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import CardContent from "@material-ui/core/CardContent";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10)
  },
  card: {
    marginBottom: theme.spacing(2),
    backgroundColor: "#51648E",
    color: "white"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  controls: {
    alignItems: "center",
    paddingBottom: theme.spacing(1)
  },
  detailsContent: {
    flex: "1 0 auto",
    paddingBottom: theme.spacing(0)
  },
  detailsTitle: {
    marginBottom: theme.spacing(2)
  },
  playIcon: {
    width: 38,
    height: 38,
    color: "white"
  },
  nextIcon: {
    color: "white"
  },
  date: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightLight,
    paddingTop: theme.spacing(2)
  }
}));

export default function Episode(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.detailsContent}>
            <Typography
              component="h5"
              variant="h5"
              className={classes.detailsTitle}
            >
              {props.episode.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {
                props.podcasts.find(
                  podcast => podcast._id === props.episode.podcast
                ).title
              }
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {`${Math.ceil(props.episode.duration / 60)} minute${
                props.episode.duration / 60 > 1 ? "s" : ""
              }`}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="previous" className={classes.nextIcon}>
              {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="next" className={classes.nextIcon}>
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </div>
        </div>
      </Card>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.detailsContent}>
            <Typography
              component="h5"
              variant="h5"
              className={classes.detailsTitle}
            >
              Description
            </Typography>
            <Typography variant="subtitle1">
              {props.episode.description}
            </Typography>
            <Typography className={classes.date} variant="subtitle1">
              {new Date(props.episode.created).toLocaleDateString("en-EN", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Container>
  );
}

Episode.propTypes = {
  podcasts: PropTypes.array.isRequired,
  episode: PropTypes.object.isRequired
};
