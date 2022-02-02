import React, { Component } from 'react';
import {Modal, Button} from "react-bootstrap";

class Expenselistmodal extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose()}>
        List Expenses Here!
      </Modal>
    );
  }
}

export default Expenselistmodal;
