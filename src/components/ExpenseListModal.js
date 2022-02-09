import React, { Component } from 'react';
import {Modal, Button, Stack} from "react-bootstrap";

class Expenselistmodal extends Component {
  handleClose = () => {
    this.props.history.goBack()
  }

  handleExpenseDelete = event => {
      //todo - figure out how to handle expense delete
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
            {this.props.expenses.map(expense => {
              return <Stack direction="horizontal" gap="2" key={expense.id}>
                <div className="me-auto fs-4">{expense.name}</div>
                <div className="fs-5">{expense.amount}</div>
              <Button size="sm" variant="outline-danger" onClick={event => this.handleExpenseDelete(event)}>&times;</Button>
              </Stack>
            })}
          </Stack>
        </Modal.Body>
      </Modal>
    );
  }
}

export default Expenselistmodal;
