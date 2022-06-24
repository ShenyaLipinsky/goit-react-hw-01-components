import propTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          {friend.isOnline ? (
            <span className="status online"></span>
          ) : (
            <span className="status offline"></span>
          )}
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friend: propTypes.exact({
    // isOnline: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    avatar: propTypes.string,
  }),
};
