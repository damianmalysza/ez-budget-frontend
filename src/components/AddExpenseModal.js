import {Form, Modal, Button} from "react-bootstrap";
import React, { Component } from 'react';

class AddExpenseModal extends Component {
  handleClose = () => {
    this.props.history.goBack()
  }
  
  render() {
    return (
      <Modal show="true" onHide={this.handleClose}>
        ADD EXPENSE FORM HERE!
      </Modal>
    );
  }
}

export default AddExpenseModal;
