import filterReducer from '../../reducers/filters';
import moment from "moment";

test('should setup default filter values',()=> {
    const state = filterReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date', //date or amount
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sort by to amount',()=> {

    const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT' ,  sortBy: 'amount'});
    expect(state.sortBy).toEqual('amount');
});
