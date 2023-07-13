import { Provider } from 'react-redux';
import { store } from '@/store/index.js';

export const MainProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
