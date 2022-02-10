import {Form, Modal, Button} from "react-bootstrap";
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addNewExpense} from "../actions/addNewExpense"

class AddExpenseModal extends Component {
  state = {
    name: "",
    amount: "",
    budget_id: this.props.budget_id,
    form_errors: ""
  }
  
  handleModalClose = () => {
    this.props.history.goBack()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewExpense(this.state)
    this.handleModalClose()
    // potential improvement - add component that renders a checkmark image to show that expense got added or maybe have expense list opened automatically
  }

  handleFormChange = (event) => {
    this.setState(state => {
      return {[event.target.name]: event.target.value}
    })
  }

  render() {
    return (
      <Modal show="true" onHide={this.handleModalClose}>
        <Form onSubmit={this.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>New Expense</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Expense Name</Form.Label>
              <Form.Control type="text" name="name" value={this.state.name} required onChange={event => this.handleFormChange(event)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter dollar amount of expense" min={1} step={0.01} name="amount" value={this.state.amount} required onChange={event => this.handleFormChange(event)}/>
            </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">Add Expense</Button>
          </div>
          </Modal.Body>
          </Form>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {addNewExpense: (expenseData) => dispatch(addNewExpense(expenseData))}
}

export default connect(null,mapDispatchToProps)(AddExpenseModal);
