import React, {Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import User from '../pages/User';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import UploadFile from '../pages/UploadFile';
const Index = () => (
    <Fragment>
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route path='/user' component={User} />
                    <Route path='/subir' component={UploadFile} />
                    <Route path='/' component={Home} />
                </Switch>
            </main>
            <Footer />
        </Router>
    </Fragment>
);

export default Index;