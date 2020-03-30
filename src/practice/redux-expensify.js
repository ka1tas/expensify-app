import {createStore , combineReducers} from "redux";
import { v4 as uuid } from 'uuid';

// ADD_EXPENSE
const addExpense = (
        {
            description='',
            note ='',
            amount='',
            createdDate=0
        }={}
    ) =>({
    type:'ADD_EXPENSE',
    expense : {
        id: uuid(),
        description,
        note,
        amount,
        createdDate
    }
})
// REMOVE_EXPENSE

const removeExpense= ({id}={})=>({
    type:'REMOVE_EXPENSE',
        id
});
// EDIT_EXPENSE

const ediExpense = (id , updates)=>({
    type:'EDIT_EXPENSE',
        id,
        updates
});


// SET_TEXT_FILTER
const setTextFilter = (text = '')=>({
   type:"SET_TEXT_FILTER",
    text
});

// SORT_BY_DATE
const sortByDate = ()=>({
    type:'SORT_BY_DATE',
    sortBy: 'date'
})
// SORT_BY_AMOUNT
const sortByAmount = ()=>({
    type:'SORT_BY_AMOUNT',
    sortBy: 'amount'
})

// SET_START_DATE
const setStartDate= (startDate)=>({
    type: "SET_START_DATE",
    startDate
})
// SET_END_DATE
const setEndDate= (endDate)=>({
    type: "SET_END_DATE",
    endDate
})

const expenseReducerDefault = [];
//expense reducer
const expenseReducer= (state = expenseReducerDefault , action )=>{
    switch(action.type){

        case 'ADD_EXPENSE' :{
          //  return  state.concat(action.expense);
         return   [...state , action.expense ]
        }

        case 'REMOVE_EXPENSE': {
            return state.filter(({id})=>id !== action.id)
        }

        case'EDIT_EXPENSE':{

            return state.map((expense)=>{
                    if(expense.id === action.id) {
                        return {
                            ...expense , ...action.updates
                        }
                    }
                    else{
                           return expense;
                    }
            })
        }

        default:
            return state;
}
};


const filterReducerDefault = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
};

//filter reducer
const filterReducer = (state = filterReducerDefault, action)=>{
switch (action.type) {
    case 'SET_TEXT_FILTER':{
        return {
            ...state , text : action.text
        }
    }
    case 'SORT_BY_DATE':{
        return {
            ...state , sortBy: action.sortBy
        }
    }
    case 'SORT_BY_AMOUNT':{
        return {
            ...state , sortBy: action.sortBy
        }
    }
    case 'SET_START_DATE':{
        return {
            ...state , startDate: action.startDate
        }
    }
    case 'SET_END_DATE':{
        return {
            ...state , endDate: action.endDate
        }
    }
    default:
        return state;
}
};



//creating store using combinedReducer
const store = createStore(
    combineReducers(
        {
            expenses : expenseReducer,
            filters : filterReducer
        }
    )
);

//get visible expenses
const getVisibleExpenses =(expenses , {text , sortBy , startDate, endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof  startDate !=='number' || expense.createdDate >= startDate;
        const endDateMatch = typeof  endDate !=='number' || expense.createdDate <= endDate;
        const textMatch = (text==='')?true:(expense.description.toLowerCase().includes(text.toLowerCase())?true:false)
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
     if(sortBy === 'date'){
            return a.createdDate < b.createdDate ? 1 : -1;
     }
     else if(sortBy === 'amount'){
         return a.amount < b.amount ? 1 : -1;
     }
    });
};



store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses , state.filters);
console.log(visibleExpenses);
});

//expense
const expenseOne = store.dispatch(addExpense({
    description:'March Rent',
    note:'The pg rent for the month of march 2020' ,
    amount: 5000,
    createdDate: -10000
}));
const expenseTwo = store.dispatch(addExpense({
    description:'Mobile',
    note:'POCO x2 mobile' ,
    amount: 15000,
    createdDate:-552000
}));
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(ediExpense(expenseTwo.expense.id ,{ amount : 16000 }));
//
// //filters
//store.dispatch(setTextFilter('reNT'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(100));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(-50));
// store.dispatch(setEndDate());

// const demoState ={
//     expenses : [{
//         id:'2sajah2-qwqwqw234-hjkjh7as-kdhjds68sak',
//         description:'March Rent',
//         note:'The pg rent for the month of march 2020' ,
//         amount: 500,
//         createdDate:0
//     }],
//     filters : {
//         text: 'rent',
//         sortBy: 'amount', //date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// }


