import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './statistics.styled';
import { number } from 'prop-types';

export const Statistics = ({ options, values, total, positivePercentage }) => {
  return (
    <StatisticsList>
      {options.map((option, i) => (
        <StatisticsItem key={i}>
          {option}: {values[i]}
        </StatisticsItem>
      ))}
      <StatisticsItem>Total: {total}</StatisticsItem>
      <li>
        Positive feedbacks: {positivePercentage ? positivePercentage : 0}%
      </li>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  values: PropTypes.arrayOf(PropTypes.number),
  total: PropTypes.number,
  positivePercentage: number,
};
