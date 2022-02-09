import React, { Component } from 'react';
import {Modal, Button, Stack} from "react-bootstrap";
import ExpenseItem from './ExpenseItem'

class Expenselistmodal extends Component {
  handleClose = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <Modal show="true" onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
              Expenses for {this.props.budget_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction="vertical" gap="3">
            {this.props.expenses.map(expense => <ExpenseItem key={expense.id} expense={expense}/>)}
          </Stack>
        </Modal.Body>
      </Modal>
    );
  }
}

export default Expenselistmodal;
