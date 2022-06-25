import propTypes from 'prop-types';
import {
  FriendsItem,
  StatusOnline,
  StatusOffline,
  Avatar,
  Name,
} from './FriendList.styled';
import { Box } from '../Box';

export const FriendList = ({ friends }) => {
  return (
    <Box mt={3} mx="auto" py={3} maxWidth={2} as={'ul'}>
      {friends.map(friend => (
        <FriendsItem key={friend.id}>
          {friend.isOnline ? <StatusOnline /> : <StatusOffline />}
          <Avatar src={friend.avatar} alt="User avatar" />
          <Name>{friend.name}</Name>
        </FriendsItem>
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  friend: propTypes.exact({
    isOnline: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    avatar: propTypes.string,
  }),
};
