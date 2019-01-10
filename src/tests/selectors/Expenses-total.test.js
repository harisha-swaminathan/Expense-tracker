import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseTotal}  from '../../selectors/Expenses-total';
import expenses from '../fixtures/expenses';
import fixtures from '../fixtures/filters';
import selectExpenses from '../../selectors/expenses';
import numeral from 'numeral';

test('return 0 for no expense',()=>{
    const wrapper=shallow(<ExpenseTotal expenses={[]}/>);
    expect(wrapper.instance().render()).toBe(numeral(0).format('$0,0.00'));
});
test('add up single expense',()=>{
    const wrapper=shallow(<ExpenseTotal expenses={[expenses[0]]}/>);
    expect(wrapper.instance().render()).toBe(numeral(1.95).format('$0,0.00'));
});
test('add up multiple expense',()=>{
    const wrapper=shallow(<ExpenseTotal expenses={expenses}/>);
    expect(wrapper.instance().render()).toBe(numeral(1141.95).format('$0,0.00'));
});
