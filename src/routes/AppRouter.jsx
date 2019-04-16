import React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import Navbar from '../components/Navbar';
import Contacts from '../dashboard/Contacts';
import AddContact from '../dashboard/AddContact';
import Contact from '../dashboard/Contact';
import EditContact from '../dashboard/EditContact';

export const history = createBrowserHistory();
class AppRouter extends React.Component {

    render() {
        return(
            <div>
                <Router history={history}>
                    <div>
                        <Navbar />
                        <Switch>
                            <Route exact={true} path='/' component={Contacts}/>
                            <Route exact={true} path='/new' component={AddContact}/>
                            <Route exact={true} path='/contact/:id'  component={Contact}/>
                            <Route exact={true} path='/contact/:id/edit' component={EditContact}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
export default AppRouter;