import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter'
import {BrowserRouter} from 'react-router-dom'
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux'
import getStore from './store/store'

import * as serviceWorker from './serviceWorker';
import './styles/index.css';
const store = getStore();
const app = (
    // <Provider store={store}>
    //         <BrowserRouter>
    //                 <AppRouter />
    //         </BrowserRouter>
    // </Provider>
    <Provider store={store.store}>
        <BrowserRouter>
            <PersistGate loading={null} persistor={store.persistor}>
                    <AppRouter />
            </PersistGate>
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
