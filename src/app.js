import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Router from './routers/Router';
import configureStore from './store/configureStore';
import {setStartExpenses} from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();
const jsx=(
    <Provider store={store}>
        <Router/>
    </Provider>
    
);
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(setStartExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'));
});

