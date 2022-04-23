import React, {Component} from 'react';
import {getScoreFromDb} from './database';

/**
 * Form for looking up a user's ELO
 * @typedef {object} Props
 * @extends {Component<Props>}
 * @return {React.Component}
 */
class ScoreLookup extends Component {
  /**
   * Initializes the state of the component
   * @param {*} props - No props are used
   */
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      status: 'Ready to lookup a score',
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * @event onChange - Updates the state of user when the input changes
   * @param {event} event - The event that triggered the change
   */
  handleUserChange(event) {
    this.setState({user: event.target.value});
  }

  /**
   * @event onSubmit - Submits the user to lookup in the database and
   *  provides feedback to the user
   * @param {event} event - The event that triggered the submit
   */
  handleSubmit(event) {
    event.preventDefault();
    this.setState({status: 'Getting score from database...'});
    getScoreFromDb(this.state.user).then(
        (snapshot) => {
          this.setState({
            status: `${this.state.user} has score ` +
            `${Math.round(snapshot.val() || 1200)}`,
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
          User to lookup:{' '}
          <input
            type="text"
            value={this.state.user}
            onChange={this.handleUserChange}
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

export default ScoreLookup;
