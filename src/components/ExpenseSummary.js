import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import ExpenseTotal from '../selectors/Expenses-total';
import selectExpenses from '../selectors/expenses';


export class ExpenseSummary extends React.Component{
  render(){
    const expense_s =this.props.expenses.length === 1 ? 'expense' : 'expenses' ;
    return(
        <div className="page-header">
            <div className="container">
                <h1 className="page-header__title">
                    Viewing <span>{this.props.expenses.length}</span> {expense_s} totalling <span>{this.props.expensesTotal}</span>
                    <div className="page-header__actions">
                        <Link className="button-color" to="/create">Add Expense</Link>
                    </div>
                </h1>
            </div>
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

 