import React from 'react';
import List from './List';
import Edit from './Edit';
import {
    Route,
    Switch
} from 'react-router-dom';

const User = ({match:{path}})=>(
    <Switch>
        <Route path={`${path}/new`} exact component={Edit} />
        <Route path={`${path}/:id`} exact component={Edit} />
        <Route path={`${path}`} component={List} />
    </Switch>
);

export default User;