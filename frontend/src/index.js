import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import posts from './reducers';
import {createStore,
    applyMiddleware,
    compose}
            from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	posts,
	composeEnhancers(
		applyMiddleware(
			thunk,
			logger
		)
	)
);

ReactDOM.render(
	<Provider store={store}>  
		<BrowserRouter> 
			<App />
		</BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
