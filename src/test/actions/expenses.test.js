import  { addExpense , editExpense , removeExpense} from "../../actions/expenses";

test('should create edit action object',()=>{
    const result = editExpense('id001',{description: 'Electro'});

    expect(result).toEqual({
        type: 'EDIT_EXPENSE' ,
        id: 'id001',
        updates : {
            description: 'Electro'
        }
    })
})