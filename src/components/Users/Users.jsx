import React from 'react';
import { useGetUsersQuery } from '@/store/users/usersApiSlice.js';
import { useSelector } from 'react-redux';

import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary.jsx';
import { User } from 'components/Users/User.jsx';
import { UserSkeleton } from 'components/Users/UserSkeleton.jsx';
import { search } from 'components/utils/search.js';

import styles from './Users.module.scss';

export const Users = () => {
  const searchFilter = useSelector((state) => state.filter.searchFilter);
  const userType = useSelector((state) => state.category.category.type);

  const { data: users, isLoading, isFetching, isError } = useGetUsersQuery({ example: userType });

  return (
    <div className={styles.users}>
      {isError && <ErrorBoundary />}
      {isLoading || isFetching ? (
        <UserSkeleton cards={8} />
      ) : (
        search(users?.items, searchFilter)?.map((user) => <User key={user.id} user={user} />)
      )}
    </div>
  );
};
