import React, { Component } from 'react';
import {Modal} from "react-bootstrap";
import {withRouter} from "react-router-dom"

class AddBudgetModal extends Component {
  
  handleModalClose = () => {
    this.props.history.goBack()
  }
  
  render() {
    return (
      <Modal show="true" onHide={this.handleModalClose}>
        Add Budget Form Here!
      </Modal>
    );
  }
}

export default AddBudgetModal;
