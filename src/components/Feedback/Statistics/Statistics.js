import { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';

export default class Statistics extends Component {
  render() {
    const { Good, Neutral, Bad, total } = this.props;

    return (
      <>
        <h3>Statistics</h3>
        {total ? (
          <ul>
            <li>Good: {Good}</li>
            <li>Neutral: {Neutral}</li>
            <li>Bad: {Bad}</li>
            <li>Total: {this.props.total}</li>
            <li>
              Positive feedback:{' '}
              {this.props.positivePercentage
                ? this.props.positivePercentage
                : 0}
              %
            </li>
          </ul>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

Statistics.propTypes = {
  Good: PropTypes.number,
  Neutral: PropTypes.number,
  Bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
