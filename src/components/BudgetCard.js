import React, { Component } from 'react';
import { Button, Card, Stack } from "react-bootstrap";
import AddExpenseModal from './AddExpenseModal';
import ExpenseListModal from './ExpenseListModal';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

class Budgetcard extends Component {
  
  render() {
    return (
     <Router> 
      <Card >
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
            <div className="me-2">{this.props.name}</div>
            <div className="d-flex align-items-baseline">
              <span className="text-muted fs-6 ms-1">${this.props.budget_max}</span>
            </div>
          </Card.Title>
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Link to={`/budgets/${this.props.name}/expenses/new`}>
            <Button variant="outline-primary" className="ms-auto">Add Expense</Button>
            </Link>
            {/* think about how expenses should be stored, they are brought in through the budgets state but maybe they should be in their own state? */}
            <Link to={`/budgets/${this.props.name}/expenses`}>
            <Button variant="outline-secondary" onClick={this.handleExpenseListModal}>View Expenses</Button>
            </Link>
          </Stack>
        </Card.Body>
      </Card> 
      <Route exact path={`/budgets/${this.props.name}/expenses/new`} render={props => <AddExpenseModal budget_id={this.props.budget_id} {...props} />}/>
      <Route exact path={`/budgets/${this.props.name}/expenses`} component={ExpenseListModal}/>

     </Router>
    );
  }
}

export default Budgetcard;
