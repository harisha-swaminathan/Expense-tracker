import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

    let editExpense,history,startRemoveExpense,wrapper;
beforeEach(()=>{
     editExpense=jest.fn();
     history={push:jest.fn()};
     startRemoveExpense=jest.fn();
     wrapper=shallow(<EditExpensePage expense={expenses[0]} editExpense={editExpense} history={history} startRemoveExpense={startRemoveExpense}/>);
})
test('render edit expense page correctly',()=>{
expect(wrapper).toMatchSnapshot();
});
test('render edit expense correctly for on submit',()=>{
    
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});
test('render correctly for onRemove',()=>{  
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[0].id});
    expect(history.push).toHaveBeenLastCalledWith('/');
});