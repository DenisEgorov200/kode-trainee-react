import React from 'react';
import { useGetUsersQuery } from '@/store/users/usersApiSlice.js';
import { useSelector } from 'react-redux';

import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary.jsx';
import { User } from 'components/Users/User.jsx';
import { UserSkeleton } from 'components/Users/UserSkeleton.jsx';

import styles from './Users.module.scss';

export const Users = () => {
  const userType = useSelector((state) => state.filter.category.type);

  const { data: users, isLoading, isError } = useGetUsersQuery({ example: userType });

  return (
    <div className={styles.users}>
      {isError && <ErrorBoundary />}
      {isLoading && <UserSkeleton cards={1} />}
      {users?.items?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
