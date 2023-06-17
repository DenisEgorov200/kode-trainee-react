import React from 'react';
import { useGetUsersQuery } from '@/store/users/usersApiSlice.js';

import { User } from 'components/Users/User.jsx';
import { UserSkeleton } from 'components/Users/UserSkeleton.jsx';

import styles from './Users.module.scss';

export const Users = () => {
  const { data: users, isLoading, isError, error } = useGetUsersQuery();

  return (
    <div className={styles.users}>
      {isError && <div>{error.message}</div>}
      {isLoading && <UserSkeleton cards={8} />}
      {users?.items?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
