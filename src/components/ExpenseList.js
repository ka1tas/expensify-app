import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses';
import ExpenseListFilter from "./ExpenseListFilters";

export const ExpenseList = (props)=>(
    <div>

        {(props.expenses.length===0)?
            <h1> No expense found! </h1> :

            props.expenses.map((expense)=>{
            return  <ExpenseListItem key={expense.id} {...expense}/>
        })


        }


    </div>
);

const mapStatetoProps =(state)=>{
    return {
        expenses: selectExpenses(state.expenses , state.filters)
    };
};

export default  connect(mapStatetoProps)(ExpenseList);

