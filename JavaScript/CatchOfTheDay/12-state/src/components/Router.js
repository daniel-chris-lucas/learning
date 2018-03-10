import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import StorePicker from './StorePicker';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router