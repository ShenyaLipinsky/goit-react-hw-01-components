import userData from './Profile/user';
import statData from './Statistics/data';
import friends from './FriendList/friends';
import transactions from './TransactionHistory/transactions';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
// import { Box } from './Box';

export const App = () => {
  return (
    <>
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
      <TransactionHistory items={transactions} />
    </>
  );
};
