import React from 'react';
import { connect } from 'react-redux';
import ExpenseTotal from '../selectors/Expenses-total';
import selectExpenses from '../selectors/expenses';


export class ExpenseSummary extends React.Component{
  render(){
    const expense_s =this.props.expenses.length === 1 ? 'expense' : 'expenses' ;
    return(
        <div>
            <h1>
                Viewing {this.props.expenses.length} {expense_s} totalling {this.props.expensesTotal}
               
            </h1>
            <h1>
            </h1>
        </div>
    );
}
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    expensesTotal: <ExpenseTotal/>
  };
};

 export default connect(mapStateToProps)(ExpenseSummary);

 