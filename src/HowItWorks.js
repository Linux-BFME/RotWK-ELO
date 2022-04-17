
import React, {Component} from 'react';
/**
 * Component for describing how the website works.
 * @typedef {object} Props
 * @extends {Component<Props>}
 * @return {React.Component}
 */
class HowItWorks extends Component {
  /**
   * Initializes the state of the component
   * @param {*} props - No props are used
   */
  constructor(props) {
    super(props);
  }

  /**
   * @return {React.Component} The component to describe how the website works
   */
  render() {
    return (
      <div>
        <h3>
          How This Works
        </h3>
        <ul>
          <li>The Host of the game enters the GR ID of
            the winner and loser, then hits Submit</li>
          <li>The ELO of the players is updated</li>
          <li>Use this ELO rating for making balanced NvN matches!</li>
        </ul>
        <h4>
          {'Can\'t I Cheat?'}
        </h4>
        <ul>
          <li>This is designed for creating fun matches</li>
          <li>{'No one will stop you from cheating, but this ' +
            'isn\'t Starcraft.'}</li>
          <li>{'The BFME community is small, so you\'ll just be known ' +
            'as a griefer'}</li>
        </ul>
        <h4>
          Can I add NvN game outcomes?
        </h4>
        <ul>
          <li>No</li>
        </ul>
        <h4>
          I need to reset my ELO
        </h4>
        <ul>
          <li>A reset button will be added soon</li>
        </ul>
        <h4>
          Will you add support for checking replays?
        </h4>
        <ul>
          <li>Maybe in the future if people want it</li>
        </ul>
        <h4>
          How can I install the BFME games?
        </h4>
        <ul>
          <li>{'Visit '}
            <a href="https://forums.revora.net/topic/105190-bfme1bfme2rotwk-games-download-installation-guide/">
                Revora
            </a>
            {' (Yes it\'s safe)'}</li>
        </ul>
        <h4>
          Where can I find the source code?
        </h4>
        <ul>
          <li>
            <a href="https://github.com/Linux-BFME/RotWK-ELO">github.com/Linux-BFME/RotWK-ELO</a>
          </li>
          <li>
            PRs accepted!
          </li>
        </ul>
      </div>
    );
  }
}

export default HowItWorks;
