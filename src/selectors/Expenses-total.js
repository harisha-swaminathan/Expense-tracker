import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from './expenses';
import numeral from 'numeral';

export class ExpenseTotal extends React.Component{
  render(){
    let total=0;
       {
          this.props.expenses.length===0?(total=0):(this.props.expenses.map((expense)=>{
          total=total+((expense.amount)/100)
          })
          )
        }
     return (
       
           numeral(total).format('$0,0.00')
         
     );
    
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseTotal);

