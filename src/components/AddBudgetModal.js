import React, { Component } from 'react';
import {Modal, Form, Button} from "react-bootstrap";
import {withRouter} from "react-router-dom"

class AddBudgetModal extends Component {
  
  state = {
    name: "",
    max_budget: ""
  }

  handleModalClose = () => {
    this.props.history.goBack()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    debugger
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
            <Modal.Title>New Budget</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={this.state.name} required onChange={this.handleFormChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Budget Max</Form.Label>
              <Form.Control type="number" min={1} step={0.01} name="budget_max" value={this.state.budget_max} required onChange={this.handleFormChange}/>
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Add Budget
              </Button>
            </div>
          </Modal.Body>
        </Form>
      </Modal>
    );
  }
}

export default AddBudgetModal;
