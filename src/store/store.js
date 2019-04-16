import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import {
    persistReducer,
    persistStore
} from 'redux-persist'
import autoMergeL2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import contactReducer from '../reducer/contacts';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'


export default () => {

    const ContactPersistConfig = {
        key: 'auth',
        storage: storage,
    }
    const persistConfig = {
        key: 'root',
        storage,
      }
    const rootReducer = combineReducers({
        contacts:contactReducer
    })
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    const store = createStore(persistedReducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
    let persistor = persistStore(store)
    return { store, persistor }

    // const store = createStore(combineReducers({
    //     contacts: contactReducer,
    // }),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // );

    // return store;
}