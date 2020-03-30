import React from 'react';
import  {shallow} from 'enzyme';
import { ExpenseListItem } from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";


test('should render with expense ',()=>{
    const wraper = shallow(<ExpenseListItem {...expenses[2]}/>)
    expect(wraper).toMatchSnapshot();
})