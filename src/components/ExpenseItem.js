import React, { Component } from 'react';
import {Stack, Button} from 'react-bootstrap'

class Expenseitem extends Component {
  render() {
    return (
      <Stack direction="horizontal" gap="2" key={this.props.expense.id}>
        <div className="me-auto fs-4">{this.props.expense.name}</div>
        <div className="fs-5">{this.props.expense.amount}</div>
      <Button size="sm" variant="outline-danger" onClick={event => this.handleExpenseDelete(event)}>&times;</Button>
      </Stack>
      );
    }
  }
  
  export default Expenseitem;
  