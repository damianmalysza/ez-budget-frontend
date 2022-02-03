import React, { Component } from 'react';
import {Modal, Button} from "react-bootstrap";

class Expenselistmodal extends Component {
  handleClose = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <Modal show="true" onHide={this.handleClose}>
        List Expenses Here!
      </Modal>
    );
  }
}

export default Expenselistmodal;
