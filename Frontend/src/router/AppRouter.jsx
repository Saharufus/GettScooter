import React, { useContext } from 'react';
import { privateRoutes, publicRoutes } from './router';
import { Switch, Route, Redirect } from "react-router-dom";
import {AppContext} from "../context/context"
import Home from '../components/pages/Home';
import PickScooter from '../components/pages/PickScooter';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AppContext);

    if(isLoading) {
      return <div>LOADING</div>
    }

    return isAuth ? 
      <Switch>
        {privateRoutes.map((route) => (
          <Route
            component = {route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        ))}
        <Redirect to = "/PickScooter" />
      </Switch>
     : 
      <Switch>
        {publicRoutes.map((route) => (
          <Route
            component = {route.component} 
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        ))}
        <Redirect to ="/welcome" />
        </Switch>
    }
    


export default AppRouter;






             
            