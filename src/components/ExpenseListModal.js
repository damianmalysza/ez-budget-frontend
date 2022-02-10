import React, { Component } from 'react';
import {Modal, Button, Stack} from "react-bootstrap";
import ExpenseItem from './ExpenseItem';
import {connect} from 'react-redux';

class Expenselistmodal extends Component {
  handleClose = () => {
    this.props.history.goBack()
  }

  render() {
    const budget = this.props.budgets.find(budget => budget.id === this.props.budget_id)
    const expenses = budget.attributes.expenses
    
    return (
      <Modal show="true" onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
              Expenses for {this.props.budget_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction="vertical" gap="3">
            {expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} budget_id={budget.id}/>)}
          </Stack>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    budgets: state.budgets
  }
}

export default connect(mapStateToProps)(Expenselistmodal);
