import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';
import App from './routes/App';
import redirect from './routes/emailConfirmation';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/api/account/confirmation/:token' component={redirect} />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));
