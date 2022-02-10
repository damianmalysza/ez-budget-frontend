import React, { Component } from 'react';
import {Stack, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/removeExpense'

class Expenseitem extends Component {
  handleExpenseDelete = event => {
    console.log(this.props)
    this.props.removeExpense(this.props.expense,this.props.budget_id)
    //todo - figure out how to handle expense delete event
  }
  
  render() {
    return (
      <Stack direction="horizontal" gap="2" key={this.props.expense.id}>
        <div className="me-auto fs-4">{this.props.expense.name}</div>
        <div className="fs-5">{this.props.expense.amount}</div>
      <Button size="sm" variant="outline-danger" onClick={event => this.handleExpenseDelete(event)}>&times;</Button>
      </Stack>
      );
    }
  }

const mapDispatchToProps = dispatch => {
  return {removeExpense: (expense,budgetId) => dispatch(removeExpense(expense,budgetId))}
}
  
  export default connect(null, mapDispatchToProps)(Expenseitem);
  