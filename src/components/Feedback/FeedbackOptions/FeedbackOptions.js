import PropTypes from 'prop-types';

export default function FeedbackOptions({ good, neutral, bad }) {
  return (
    <>
      <button onClick={good}>Good</button>
      <button onClick={neutral}>Neutral</button>
      <button onClick={bad}>Bad</button>
    </>
  );
}

FeedbackOptions.propTypes = {
  good: PropTypes.func,
  neutral: PropTypes.func,
  bad: PropTypes.func,
};
