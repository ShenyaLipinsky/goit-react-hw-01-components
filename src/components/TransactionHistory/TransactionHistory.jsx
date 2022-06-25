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
        {items.map(item => (
          <TableRow key={item.id}>
            <TableDescription>{item.type}</TableDescription>
            <TableDescription>{item.amount}</TableDescription>
            <TableDescription>{item.currency}</TableDescription>
          </TableRow>
        ))}
      </tbody>
    </Box>
  );
};

TransactionHistory.propTypes = {
  item: propTypes.exact({
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
  }),
};
