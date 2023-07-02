import React, { useEffect } from 'react';
import { useGetUsersQuery } from '@/store/users/usersApiSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '@/store/users/usersSlice.js';

import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary.jsx';
import { ErrorFound } from 'components/ErrorFound/ErrorFound.jsx';
import { User } from 'components/Users/User.jsx';
import { UserSkeleton } from 'components/Users/UserSkeleton.jsx';

import styles from './Users.module.scss';

export const Users = () => {
  const dispatch = useDispatch();
  const { filteredUsers } = useSelector((state) => state.users);
  const userType = useSelector((state) => state.category.category.type);

  const { data: usersName, isFetching, isError } = useGetUsersQuery({ example: userType });

  useEffect(() => {
    dispatch(setUsers(usersName?.items));
  }, [userType]);

  if (isError) return <ErrorBoundary />;
  if (isFetching) return <UserSkeleton cards={8} />;
  if (!filteredUsers?.length) return <ErrorFound />;

  return (
    <div className={styles.users}>
      {filteredUsers?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
