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
        {stats.map(({ id, label, percentage }) => (
          <StatListItem key={id} id={id} backgroundColor={setColor()}>
            <StatLabel>{label}</StatLabel>
            <StatPercentage>{percentage}%</StatPercentage>
          </StatListItem>
        ))}
      </StatList>
    </Box>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
