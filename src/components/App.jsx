import userData from '.././user';
import { UserCard } from './UserCardHeader/UserCardHeader';
console.log(userData);

export const App = () => {
  return (
    <div className="profile">
      <UserCard
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      ></UserCard>
    </div>
  );
};
