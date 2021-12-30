import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '@/pages/Main';

const MyRouter: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default MyRouter;
