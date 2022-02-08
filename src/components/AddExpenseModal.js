import {Form, Modal, Button} from "react-bootstrap";
import React, { Component } from 'react';

class AddExpenseModal extends Component {
  state = {
    name: "",
    amount: 1,
    budget_id: this.props.budget_id,
    form_errors: ""
  }
  
  handleClose = () => {
    this.props.history.goBack()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    //todo - set up behavior to send post request to add expense to budget
  }

  handleFormChange = (event) => {
    this.setState(state => {
      return {[event.target.name]: event.target.value}
    })
  }

  render() {
    return (
      <Modal show="true" onHide={this.handleClose}>
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
              <Form.Control type="number" min={1} step={0.01} name="amount" value={this.state.amount} required onChange={event => this.handleFormChange(event)}/>
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

export default AddExpenseModal;
