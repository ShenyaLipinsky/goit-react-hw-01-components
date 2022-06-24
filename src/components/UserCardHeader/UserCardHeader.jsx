import { UserCardFooter } from 'components/UserCardFooter/UserCardFooter';
import propTypes from 'prop-types';

export const UserCard = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="description">
      <img src={avatar} alt="User avatar" className="avatar"></img>
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
      <UserCardFooter stats={stats}></UserCardFooter>
    </div>
  );
};

UserCard.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.objectOf(propTypes.number.isRequired),
};
