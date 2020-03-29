import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  panel: {
    color: "white",
    backgroundColor: "#51648E"
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular
  },
  details: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightLight
  },
  detailsTitle: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightMedium
  },
  list: {
    overflow: "auto",
    maxHeight: 50
  },
  link: {
    color: "white"
  }
}));

export default function Podcasts(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.podcasts.map(podcast => (
        <ExpansionPanel key={podcast._id} className={classes.panel}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              className={classes.heading}
            >{`${podcast.title} (${podcast.numberOfEpisodes})`}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <List>
              <ListItem>
                <Typography className={classes.detailsTitle}>
                  Description
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>{podcast.description}</Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.detailsTitle}>
                  Episodes
                </Typography>
              </ListItem>
              <List className={classes.list}>
                {props.episodes.map(episode =>
                  episode.podcast === podcast._id ? (
                    <ListItem key={episode._id}>
                      <Link
                        to={`/episodes/${episode._id}`}
                        className={classes.link}
                      >
                        {`${episode.title} - ${new Date(
                          episode.created
                        ).toLocaleDateString("en-EN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })} (${Math.ceil(episode.duration / 60)} minute${
                          episode.duration / 60 > 1 ? "s" : ""
                        })`}
                      </Link>
                    </ListItem>
                  ) : null
                )}
                <ListItem>
                  <ListItemText primary="More episodes coming soon..." />
                </ListItem>
              </List>
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}

Podcasts.propTypes = {
  podcasts: PropTypes.array.isRequired,
  episodes: PropTypes.array.isRequired
};
