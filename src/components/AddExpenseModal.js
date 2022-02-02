import {Form, Modal, Button} from "react-bootstrap";
import React, { Component } from 'react';

class AddExpenseModal extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose()}>
        ADD EXPENSE FORM HERE!
      </Modal>
    );
  }
}

export default AddExpenseModal;
