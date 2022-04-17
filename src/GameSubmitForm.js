import React, { Component } from 'react';
import { updateScoresInDb, getScoresFromDb } from "./database";
import { getEloChange, getNewElo } from "./elo";

class GameSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winnerGR: '',
      loserGR: '',
    };
    this.handleWinnerGrChange = this.handleWinnerGrChange.bind(this);
    this.handleLoserGrChange = this.handleLoserGrChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleWinnerGrChange(event) {
    this.setState({ winnerGR: event.target.value });
  }

  handleLoserGrChange(event) {
    this.setState({ loserGR: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    getScoresFromDb([this.state.winnerGR, this.state.loserGR]).then((snapshots) => {
      const winnerScore = snapshots[0].val() || 1200;
      const loserScore = snapshots[1].val() || 1200;
      console.log(winnerScore, loserScore);
      const [newWinnerScore, newLoserScore] = getNewElo(winnerScore, loserScore);
      updateScoresInDb(
        [
          { name: this.state.winnerGR, score: winnerScore },
          { name: this.state.loserGR, score: newLoserScore }
        ])
        .then(() => {
          alert(`${this.state.winnerGR}'s score has been updated from ${winnerScore} to ${newWinnerScore}\n${this.state.loserGR}'s score has been updated from ${loserScore} to ${newLoserScore}`);
        });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Winner GR: <input type="text" value={this.state.winnerGR} onChange={this.handleWinnerGrChange} />
        </label>
        <br />
        <label>
          Other Player GR: <input type="text" value={this.state.loserGR} onChange={this.handleLoserGrChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default GameSubmit;