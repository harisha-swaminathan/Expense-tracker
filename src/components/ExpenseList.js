import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className="container"> 
  <div className="list-header">
    <div className="visible-mobile">Expenses</div>
    <div className="visible-desktop">Expense</div>
    <div className="visible-desktop">Amount</div>
  </div>
  <div className="list-bottom">
    {
      props.expenses.length === 0 ? (
        <div> 
          <span className=" list-item list-item--empty">
           No expenses
          </span>
        </div>
      ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
    }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
