import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { DownloadsListReducer }  from './DowloadsList'
import { FbUserReducer } from './FB'
const reducers = combineReducers({
    DownloadsListReducer,
    FbUserReducer
});

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));