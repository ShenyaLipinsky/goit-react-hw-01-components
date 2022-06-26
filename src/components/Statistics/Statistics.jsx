import propTypes from 'prop-types';
import { setColor } from 'components/Applications/RandomColor';
import {
  Title,
  StatList,
  StatListItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';
import { Box } from '../Box';

export const Statistics = ({ title, stats }) => {
  return (
    <Box mt={3} mx="auto" maxWidth={3} bg="secondary" borderRadius="normal">
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <StatListItem key={stat.id} id={stat.id} backgroundColor={setColor()}>
            <StatLabel>{stat.label}</StatLabel>
            <StatPercentage>{stat.percentage}%</StatPercentage>
          </StatListItem>
        ))}
      </StatList>
    </Box>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stat: propTypes.exact({
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
  }),
};
