import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';

import App from './components/App.jsx';
import reducer, {defualtState} from './reducers/reducer';
import rootSaga from './sagas/index';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, defualtState, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

function renderOnLoad(){
	ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
}
window.addEventListener('load', renderOnLoad);
