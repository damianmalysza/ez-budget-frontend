import {Form, Modal, Button} from "react-bootstrap";
import React, { Component } from 'react';

class AddExpenseModal extends Component {
  handleClose = () => {
    this.props.history.goBack()
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }
  
  render() {
    return (
      <Modal show="true" onHide={this.handleClose}>
        <Form onSubmit={this.handleSubmit}>


        </Form>
      </Modal>
    );
  }
}

export default AddExpenseModal;
