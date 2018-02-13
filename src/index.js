import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import AppContainer from './containers';
import rootReducer from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

let store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
