import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return message ? message : 'No information ';
}

Notification.propTypes = {
  message: PropTypes.string,
};
