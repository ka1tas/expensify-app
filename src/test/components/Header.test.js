import React from 'react';
import { shallow } from "enzyme";
import Header from '../../components/Header';

test('Should render header',()=> {

    const wraper = shallow(<Header/>);
    //  expect(wraper.find('h1').length).toBe(1);
    // expect(wraper.find('h1').text()).toEqual('Expensify.');
    expect(wraper).toMatchSnapshot();


})


