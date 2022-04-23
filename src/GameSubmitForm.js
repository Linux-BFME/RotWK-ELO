import React, {Component} from 'react';
import {updateScoresInDb, getScoresFromDb} from './database';
import {getNewElo} from './elo';

/**
 * Form for submitting the winner and loser of a game.
 * @typedef {object} Props
 * @extends {Component<Props>}
 * @return {React.Component}
 */
class GameSubmit extends Component {
  /**
   * Initializes the state of the component
   * @param {*} props - No props are used
   */
  constructor(props) {
    super(props);
    this.state = {
      winnerGR: '',
      loserGR: '',
      status: 'Ready to submit a new game!',
    };
    this.handleWinnerGrChange = this.handleWinnerGrChange.bind(this);
    this.handleLoserGrChange = this.handleLoserGrChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * @event onChange - Updates the state of winnerGR when the input changes
   * @param {event} event - The event that triggered the change
   */
  handleWinnerGrChange(event) {
    this.setState({winnerGR: event.target.value});
  }

  /**
   * @event onChange - Updates the state of loserGR when the input changes
   * @param {event} event - The event that triggered the change
   */
  handleLoserGrChange(event) {
    this.setState({loserGR: event.target.value});
  }

  /**
   * @event onSubmit - Submits the winner and loser of a game to the database
   *  and provides feedback to the user
   * @param {event} event - The event that triggered the submit
   */
  handleSubmit(event) {
    event.preventDefault();
    this.setState({status: 'Getting scores from database...'});
    getScoresFromDb([this.state.winnerGR, this.state.loserGR]).then(
        (snapshots) => {
          this.setState({status: 'Calculating new elo ratings...'});
          const winnerScore = snapshots[0].val() || 1200;
          const loserScore = snapshots[1].val() || 1200;
          console.log(winnerScore, loserScore);
          const [newWinnerScore, newLoserScore] = getNewElo(
              winnerScore,
              loserScore,
          );
          this.setState({status: 'Updating database...'});
          updateScoresInDb([
            {name: this.state.winnerGR, score: newWinnerScore},
            {name: this.state.loserGR, score: newLoserScore},
          ]).then(() => {
            this.setState({
              status: `${this.state.winnerGR}'s score has been updated from ` +
              `${Math.round(winnerScore)} to ${Math.round(newWinnerScore)}` +
              `\n${this.state.loserGR}'s score has been updated from ` +
              `${Math.round(loserScore)} to ${Math.round(newLoserScore)}`,
            });
          }).catch((error) => {
            this.setState({
              status: `Error - ${error.message} (check your input}`},
            );
          });
        },
    ).catch((error) => {
      this.setState({
        status: `Error - ${error.message} (check your input)`,
      });
    });
  }


  /**
   * @return {React.Component} The form for submitting the winner and loser
   *  of a game
   */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Winner GR:{' '}
          <input
            type="text"
            value={this.state.winnerGR}
            onChange={this.handleWinnerGrChange}
          />
        </label>
        <br />
        <label>
          Other Player GR:{' '}
          <input
            type="text"
            value={this.state.loserGR}
            onChange={this.handleLoserGrChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
        <br />
        <br />
        Status:
        <br />
        {this.state.status}
      </form>
    );
  }
}

export default GameSubmit;
