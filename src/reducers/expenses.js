

const expenseReducerDefault = [];
//expense reducer
export default (state = expenseReducerDefault , action )=>{
    switch(action.type){

        case 'ADD_EXPENSE' :{
            //  return  state.concat(action.expense);
            return   [...state , action.expense ]
        }

        case 'REMOVE_EXPENSE': {
            console.log('inside remove expense');
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