import propTypes from 'prop-types';
import {
  FriendsItem,
  StatusOnline,
  StatusOffline,
  Avatar,
  Name,
} from './FriendList.styled';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ id, isOnline, avatar, name }) => {
    return (
      <FriendsItem key={id} id={id}>
        {isOnline ? <StatusOnline /> : <StatusOffline />}
        <Avatar src={avatar} alt="User avatar" />
        <Name>{name}</Name>
      </FriendsItem>
    );
  });
};

FriendListItem.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      isOnline: propTypes.bool.isRequired,
      name: propTypes.string.isRequired,
      avatar: propTypes.string,
    }).isRequired
  ).isRequired,
};
