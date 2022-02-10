import React, { Component } from 'react';
import {Modal, Stack, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {removeBudget} from '../actions/removeBudget'

class Confirmdelete extends Component {

  handleModalClose = () => {
    this.props.history.goBack()
  }

  handleDelete = event => {
    this.props.deleteBudget(this.props.budget_id)
    this.handleModalClose()
  }

  render() {
    return (
      <Modal show="true" onHide={this.handleModalClose}>
        <Modal.Title className="text-center mt-2">Delete this budget?</Modal.Title>
        <Modal.Body className="d-flex justify-content-center align-items-center">
          <Stack direction="horizontal" gap="2">
            <Button variant="outline-danger" onClick={event => this.handleDelete(event)}>Yes</Button>
            <Button variant="outline-secondary" onClick={this.handleModalClose}>No</Button>
          </Stack>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {deleteBudget: budgetId => dispatch(removeBudget(budgetId))}
}

export default connect(null,mapDispatchToProps)(Confirmdelete);
