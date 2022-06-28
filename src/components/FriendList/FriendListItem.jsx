import {
  FriendsItem,
  StatusOnline,
  StatusOffline,
  Avatar,
  Name,
} from './FriendList.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendsItem>
      {isOnline ? <StatusOnline /> : <StatusOffline />}
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </FriendsItem>
  );
};
