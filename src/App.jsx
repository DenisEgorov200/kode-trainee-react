import React from 'react';
import { MainProvider } from '@/providers/MainProviders.jsx';
import { AppRouter } from '@/router/AppRouter.jsx';

import { Header } from 'components/layout/Header/Header.jsx';

import './App.scss';

function App() {
  return (
    <>
      <MainProvider>
        <Header />
        <AppRouter />
      </MainProvider>
    </>
  );
}

export default App;
