import data from '../data/data.json';
import user from '../data/user.json';
import transactions from '../data/transactions.json';
import friends from '../data/friends.json';

import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Profile from './Profile/Profile';

import { ContainerMain } from './Container.styled';

export const App = () => {
  return (
    <ContainerMain>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </ContainerMain>
  );
};


