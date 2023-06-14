import React, { useState } from 'react';
import { useGetUsersQuery } from '@/store/users/usersApiSlice.js';

import { Header } from 'components/Header/Header.jsx';

import './App.scss';

function App() {
  const { data, isLoading, isError } = useGetUsersQuery();

  console.log(data);

  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
