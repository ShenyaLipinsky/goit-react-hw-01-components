import propTypes from 'prop-types';

import { Box } from '../Box';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Box mt={3} mx="auto" py={3} maxWidth={2} as={'ul'}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      isOnline: propTypes.bool.isRequired,
      name: propTypes.string.isRequired,
      avatar: propTypes.string,
    }).isRequired
  ).isRequired,
};
