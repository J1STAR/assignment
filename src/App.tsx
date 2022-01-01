import { FC } from 'react';
import Router from './Router';
import '@/styles/app.css';
import { Provider } from '@/context';

const App: FC = () => {
  return (
    <Provider>
      <Router />
    </Provider>
  );
};

export default App;
