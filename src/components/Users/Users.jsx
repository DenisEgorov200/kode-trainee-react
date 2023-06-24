import React from 'react';
import { useGetUsersQuery } from '@/store/users/usersApiSlice.js';
import { useSelector } from 'react-redux';

import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary.jsx';
import { User } from 'components/Users/User.jsx';
import { UserSkeleton } from 'components/Users/UserSkeleton.jsx';

import styles from './Users.module.scss';

export const Users = () => {
  const filteredUsers = useSelector((state) => state.filter.filteredUsers);
  const userType = useSelector((state) => state.filter.sortBy.type);

  const { isLoading, isError } = useGetUsersQuery({ example: userType });

  return (
    <div className={styles.users}>
      {isError && <ErrorBoundary />}
      {isLoading && <UserSkeleton cards={8} />}
      {filteredUsers?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
