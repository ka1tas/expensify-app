import moment from "moment";
import selectExpenses from '../../selectors/expenses';

const expenses = [{
    id:'01',
    description:'Pen',
    note:'to take a note',
    amount:'100',
    createdDate:0
},
    {
        id:'02',
        description:'Notebook',
        note:'to write notes on ',
        amount:'1000',
        createdDate:moment(0).subtract(4,'days').valueOf()
    },
    {
        id:'03',
        description:'House',
        note:'We live here',
        amount:'11004556005',
        createdDate:moment(0).add(4,'days').valueOf()
    }
]

test('should filter by text value',()=>{
    const filters = {
        text:'o',
        sortBy: 'date',
        startDate: undefined,
        endDate:undefined
    }
    const result = selectExpenses(expenses , filters);
    expect(result).toEqual([ expenses[2], expenses[1] ])
});

test('should filter by start date',()=>{
    const filters = {
        text:'',
        sortBy: 'date',
        startDate: moment(0),
        endDate:undefined
    }
    const result = selectExpenses(expenses , filters);
    expect(result).toEqual([ expenses[2], expenses[0]  ])
});