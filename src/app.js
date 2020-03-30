import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from "./routers/AppRouter";
import configureStore from "./stores/configureStore";
import {addExpense , ediExpense , removeExpense} from "./actions/expenses";


const store = configureStore();





store.dispatch(addExpense({
    description:'Gas Bill', amount: 1500, createdDate: 4545
}));


    store.dispatch(addExpense({
        description:'Water Bill', amount: 5000, createdDate : 500
    }));

store.dispatch(addExpense({
    description:'Electricity', amount: 1400, createdDate : 15000
}));



const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>

);

ReactDOM.render(jsx, document.getElementById("app"));


