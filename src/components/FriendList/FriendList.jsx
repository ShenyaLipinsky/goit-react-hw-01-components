import propTypes from 'prop-types';

import { Box } from '../Box';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Box mt={3} mx="auto" py={3} maxWidth={2} as={'ul'}>
      <FriendListItem friends={friends} />
    </Box>
  );
};

// Тут по идее не обазателен проптайп ? т.к. он проверяется в FriendsListItem
FriendList.propTypes = {
  friends: propTypes.array.isRequired,
};
