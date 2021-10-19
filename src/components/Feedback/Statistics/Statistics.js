import {} from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';

export default function Statistics({
  Good,
  Neutral,
  Bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <h3>Statistics</h3>
      {total ? (
        <ul>
          <li>Good: {Good}</li>
          <li>Neutral: {Neutral}</li>
          <li>Bad: {Bad}</li>
          <li>Total: {total}</li>
          <li>
            Positive feedback: {positivePercentage ? positivePercentage : 0}%
          </li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}

Statistics.propTypes = {
  Good: PropTypes.number,
  Neutral: PropTypes.number,
  Bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
