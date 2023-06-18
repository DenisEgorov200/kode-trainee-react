import React from 'react';
import { useGetUsersQuery } from '@/store/users/usersApiSlice.js';

import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary.jsx';
import { User } from 'components/Users/User.jsx';
import { UserSkeleton } from 'components/Users/UserSkeleton.jsx';

import styles from './Users.module.scss';

export const Users = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();

  return (
    <div className={styles.users}>
      {isError && <ErrorBoundary />}
      {isLoading && <UserSkeleton cards={8} />}
      {users?.items?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
