import React, { Component } from 'react';
import {Modal} from "react-bootstrap";
import {withRouter} from "react-router-dom"

class AddBudgetModal extends Component {
  state = {
    showModal:true
  }

  handleModalClose = () => {
    this.setState(state => {
      return {
        showModal: !state.showModal
      }
    })
    this.props.history.goBack()
  }
  
  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.handleModalClose}>
        Add Budget Form Here!
      </Modal>
    );
  }
}

export default AddBudgetModal;
