import propTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className="status" status={friend.isOnline}></span>
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
  friends: propTypes.shape({
    // isOnline: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    avatar: propTypes.string,
  }),
};
