import React, { useEffect } from 'react';
import { useGetUsersQuery } from '@/store/users/usersApiSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setSorted, setUsers } from '@/store/users/usersSlice.js';

import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary.jsx';
import { ErrorFound } from 'components/ErrorFound/ErrorFound.jsx';
import { User } from 'components/Users/User.jsx';
import { UserSkeleton } from 'components/Users/UserSkeleton.jsx';

import styles from './Users.module.scss';
import { YearLine } from 'components/UI/YearLine/YearLine.jsx';

export const Users = () => {
  const dispatch = useDispatch();
  const { sortedUsers, sortedBirthdays } = useSelector((state) => state.users);
  const userType = useSelector((state) => state.category.category.type);
  const sortByType = useSelector((state) => state.sort.sortBy.type);

  const { data: usersName, isFetching, isError } = useGetUsersQuery({ example: userType });

  useEffect(() => {
    dispatch(setUsers(usersName?.items));
    dispatch(setFilter());
    dispatch(setSorted(sortByType));
  }, [userType]);

  if (isError) return <ErrorBoundary />;
  if (isFetching) return <UserSkeleton cards={8} />;
  if (!sortedUsers?.length) return <ErrorFound />;

  return (
    <div className={styles.users}>
      {sortedUsers?.map((user, index) => (
        <React.Fragment key={`${user.id}_${index}`}>
          <User user={user} />
          {index === sortedBirthdays?.length - 1 && <YearLine />}
        </React.Fragment>
      ))}
    </div>
  );
};
