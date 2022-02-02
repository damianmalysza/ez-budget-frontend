import React, { Component } from 'react';
import { Button, Card, Stack } from "react-bootstrap";
import AddExpenseModal from './AddExpenseModal';
import ExpenseListModal from './ExpenseListModal';

class Budgetcard extends Component {
  
  state = {
    showExpenseModal: false,
    showExpenseListModal: false
  }

  handleExpenseModal = () => {
    this.setState(state => {
      return {
        showExpenseModal: !state.showExpenseModal
      }
    }
    )
  }

  handleExpenseListModal = () => {
    this.setState(state => {
      return {
        showExpenseListModal: !state.showExpenseListModal
      }
    })
  }
  
  render() {
    return (
     <> 
      <Card >
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
            <div className="me-2">{this.props.name}</div>
            <div className="d-flex align-items-baseline">
              <span className="text-muted fs-6 ms-1">${this.props.budget_max}</span>
            </div>
          </Card.Title>
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button variant="outline-primary" className="ms-auto" onClick={this.handleExpenseModal}>Add Expense</Button>
            {/* think about how expenses should be stored, they are brought in through the budgets state but maybe they should be in their own state? */}
            <Button variant="outline-secondary" onClick={this.handleExpenseListModal}>View Expenses</Button>
          </Stack>
        </Card.Body>
      </Card> 
      <AddExpenseModal 
        show={this.state.showExpenseModal}
        handleClose={() => this.handleExpenseModal}
      />
      <ExpenseListModal show={this.state.showExpenseListModal} handleClose={() => this.handleExpenseListModal}/>
     </>
    );
  }
}

export default Budgetcard;
