import axios from "axios";
import React, { Component } from "react";
import Episode from "../components/Episode";
import Podcasts from "../components/Podcasts";
import { CircularProgress } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class PodcastsApp extends Component {
  state = {
    podcasts: [],
    episodes: [],
    loading: false
  };

  componentDidMount() {
    this.getPodcasts();
    this.getEpisodes();
  }

  getPodcasts = () => {
    this.setState({ loading: true }, () =>
      // Fake loading while waiting for response
      setTimeout(() => {
        axios
          .get("/podcasts/")
          .then(res => {
            const podcasts = res.data;
            this.setState({ podcasts, loading: false });
          })
          .catch(() => alert("Could not fetch podcasts"));
      }, 3000)
    );
  };

  getEpisodes = () => {
    this.setState({ loading: true }, () =>
      // Fake loading while waiting for response
      setTimeout(() => {
        axios
          .get("/episodes/")
          .then(res => {
            const episodes = res.data;
            this.setState({ episodes, loading: false });
          })
          .catch(() => alert("Could not fetch episodes"));
      }, 3000)
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <CircularProgress style={{ marginTop: "45vh" }} />
        ) : (
          <Router>
            <Switch>
              <Route path="/" exact>
                <Podcasts
                  podcasts={this.state.podcasts}
                  episodes={this.state.episodes}
                />
              </Route>
              {this.state.episodes.map(episode => (
                <Route key={episode._id} path={`/episodes/${episode._id}`} exact>
                  <Episode episode={episode} podcasts={this.state.podcasts} />
                </Route>
              ))}
            </Switch>
          </Router>
        )}
      </React.Fragment>
    );
  }
}
