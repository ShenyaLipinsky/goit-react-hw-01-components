import userData from '../user';
import statData from '../data';
import friends from '../friends';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile
        key={userData.tag}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="UPLOAD STATS" stats={statData} />
      <FriendList friends={friends} />
    </div>
  );
};
