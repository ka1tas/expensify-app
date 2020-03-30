import React from 'react';
import  {shallow} from 'enzyme';
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test('should render expense form correctly',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense form correctly with data',()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should set note correctly',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change',{
        target:{value : 'This is the note.'}
    });

    expect(wrapper.state('note')).toBe('This is the note.');
});

test('should submit form correctly',()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[2]}  onSubmit= {onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
            description:expenses[2].description,
            amount: expenses[2].amount*10000,
            note: expenses[2].note,
            createdDate:expenses[2].createdDate
    });
});