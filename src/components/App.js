import { useState } from 'react';
import Section from './Feedback/Section/Section';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from './Feedback/Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };
  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions
        good={handleGood}
        neutral={handleNeutral}
        bad={handleBad}
      />
      <Statistics
        Good={good}
        Neutral={neutral}
        Bad={bad}
        total={total}
        positivePercentage={Math.round((good / total) * 100)}
      />
    </Section>
  );
}
