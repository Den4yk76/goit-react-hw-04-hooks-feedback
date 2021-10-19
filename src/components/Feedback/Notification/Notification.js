import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notification extends Component {
  render() {
    return this.props.message ? this.props.message : 'No information ';
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};
