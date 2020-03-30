import React from 'react';
import  {shallow} from 'enzyme';
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";


test('should render expense list with expenses',()=>{

  const wraper = shallow(<ExpenseList expenses={expenses}/>)
 expect(wraper).toMatchSnapshot();
})

test('should render expense list eith empty expenses',()=>{

    const wraper = shallow(<ExpenseList expenses={[]}/>)
    expect(wraper).toMatchSnapshot();
})