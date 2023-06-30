import React from 'react';
import { useGetUsersQuery } from '@/store/users/usersApiSlice.js';
import { useSelector } from 'react-redux';

import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary.jsx';
import { ErrorFound } from 'components/ErrorFound/ErrorFound.jsx';
import { User } from 'components/Users/User.jsx';
import { UserSkeleton } from 'components/Users/UserSkeleton.jsx';
import { searchByKey } from 'components/utils/searchByKey.js';

import styles from './Users.module.scss';

export const Users = () => {
  const searchFilter = useSelector((state) => state.filter.searchFilter);
  const userType = useSelector((state) => state.category.category.type);

  const { data: users, isLoading, isFetching, isError } = useGetUsersQuery({ example: userType });
  const filteredUsers = searchByKey(users?.items, searchFilter);

  return (
    <div className={styles.users}>
      {isError && <ErrorBoundary />}
      {isLoading || isFetching ? (
        <UserSkeleton cards={8} />
      ) : filteredUsers.length === 0 ? (
        <ErrorFound />
      ) : (
        filteredUsers?.map((user) => <User key={user.id} user={user} />)
      )}
    </div>
  );
};
