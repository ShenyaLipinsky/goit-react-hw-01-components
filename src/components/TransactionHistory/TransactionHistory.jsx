import propTypes from 'prop-types';
import {
  TableTitle,
  TableRow,
  TableDescription,
} from './TransactionHistory.styled';

import { Box } from '../Box';

export const TransactionHistory = ({ items }) => {
  return (
    <Box
      mt={3}
      mx="auto"
      width={3}
      textAlign="center"
      borderRadius="normal"
      boxShadow={'darkBox'}
      as={'table'}
    >
      <thead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id} id={id}>
            <TableDescription>{type}</TableDescription>
            <TableDescription>{amount}</TableDescription>
            <TableDescription>{currency}</TableDescription>
          </TableRow>
        ))}
      </tbody>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
