import { Component } from 'react';
import Section from './Feedback/Section/Section';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from './Feedback/Statistics/Statistics';

export default class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({ Good: prevState.Good + 1 }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({ Neutral: prevState.Neutral + 1 }));
  };

  handleBad = () => {
    this.setState(prevState => ({ Bad: prevState.Bad + 1 }));
  };

  render() {
    const { Good, Neutral, Bad } = this.state;
    const total = Good + Neutral + Bad;

    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          good={this.handleGood}
          neutral={this.handleNeutral}
          bad={this.handleBad}
        />
        <Statistics
          Good={Good}
          Neutral={Neutral}
          Bad={Bad}
          total={total}
          positivePercentage={Math.round((Good / total) * 100)}
        />
      </Section>
    );
  }
}
