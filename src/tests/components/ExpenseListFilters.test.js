import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setStartDate,setEndDate,setTextFilter,sortByDate,sortByAmount,wrapper;
beforeEach(()=>{
     setStartDate=jest.fn();
     setEndDate=jest.fn();
     setTextFilter=jest.fn();
     sortByDate=jest.fn();
     sortByAmount=jest.fn();
     wrapper=shallow(
         <ExpenseListFilters 
        filters={filters}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        />);
        
});
test('rendering Expense list filter correctly',()=>{
   expect(wrapper).toMatchSnapshot();

});
test('rendering Expense list filter with alt filters correctly',()=>{
    wrapper.setProps({
        filters: altFilters
      });
      expect(wrapper).toMatchSnapshot();
 
 });
 test('should handle text change',()=>{
    const value='rent';
    wrapper.find('input').simulate('change',{target:{value}});
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
 });
 test('should sort by amount',()=>{
     const value='amount';
     wrapper.setProps({
        filters: altFilters
      });
    wrapper.find('select').simulate('change',{target:{value}});
    expect(sortByAmount).toHaveBeenCalled();
 });
 test('should sort by date',()=>{
    const value='date';
   wrapper.find('select').simulate('change',{target:{value}});
   expect(sortByDate).toHaveBeenCalled();
});
test('should handle date changes',()=>{
    const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
test('hould handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
  });
  
