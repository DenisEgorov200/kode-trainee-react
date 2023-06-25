import React from 'react';
import { MainProvider } from '@/providers/MainProviders.jsx';
import { AppRouter } from '@/router/AppRouter.jsx';

import './App.scss';

function App() {
  return (
    <>
      <MainProvider>
        <AppRouter />
      </MainProvider>
    </>
  );
}

export default App;
