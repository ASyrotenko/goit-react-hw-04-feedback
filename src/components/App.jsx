// import React, { Component } from 'react';
import { useState } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

import './app.css';

const votesVariants = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [state, setState] = useState(votesVariants);

  const keys = Object.keys(state);
  const values = Object.values(state);

  const feedbackBtnClick = e => {
    const response = e.currentTarget.textContent;
    setState(prevState => ({
      ...prevState,
      [response]: prevState[response] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return values.reduce((total, value) => {
      return total + value;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={keys} onLeaveFeedback={feedbackBtnClick} />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            options={keys}
            values={values}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   feedbackBtnClick(e) {
//     const response = e.currentTarget.textContent;
//     this.setState(prevState => ({ [response]: prevState[response] + 1 }));
//   }

//   countTotalFeedback() {
//     const values = Object.values(this.state);
//     return values.reduce((total, value) => {
//       return total + value;
//     }, 0);
//   }

//   countPositiveFeedbackPercentage() {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   }

//   render() {
//     const keys = Object.keys(this.state);
//     const values = Object.values(this.state);

//     return (
//       <>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={keys}
//             onLeaveFeedback={this.feedbackBtnClick.bind(this)}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message={'There is no feedback'} />
//           ) : (
//             <Statistics
//               options={keys}
//               values={values}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
