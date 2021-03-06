import React, { Component } from 'react';
import { Button, Card, Stack, ProgressBar} from "react-bootstrap";
import AddExpenseModal from './AddExpenseModal';
import ExpenseListModal from './ExpenseListModal';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {currencyFormatter} from '../App'
import ConfirmDelete from './ConfirmDelete'

class Budgetcard extends Component {
  
  progressBarColor = (current,max) => {
    const ratio = current / max
    if (ratio < 0.75) return "success"
    if (ratio < 1.0) return "warning"
    return "danger"
  }

    render() {
    return (
     <Router> 
      <Card >
        <Card.Body>
          <Link to={`/budgets/${this.props.name}/delete`}>
            <Button size="sm" variant="outline-none" className="position-absolute top-0 end-0">&times;</Button>
          </Link>
          <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3 mt-3">
            <div className="me-2">{this.props.name}</div>
            <div className="d-flex align-items-baseline">
              {currencyFormatter.format(this.props.expense_total)}
              <span className="text-muted fs-6 ms-1"> / {currencyFormatter.format(this.props.budget_max)}</span>
            </div>
          </Card.Title>
          <ProgressBar 
            className="rounded-pill"
            max={this.props.budget_max}
            now={this.props.expense_total}
            variant={this.progressBarColor(this.props.expense_total,this.props.budget_max)}
          />
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Link to={`/budgets/${this.props.name}/expenses/new`} className="ms-auto">
              <Button variant="outline-primary">Add Expense</Button>
            </Link>
            <Link to={`/budgets/${this.props.name}/expenses`} className="ms-auto">
              <Button variant="outline-secondary" onClick={this.handleExpenseListModal}>View Expenses</Button>
            </Link>
          </Stack>
        </Card.Body>
      </Card> 
      <Route exact path={`/budgets/${this.props.name}/expenses/new`} render={props => <AddExpenseModal budget_id={this.props.budget_id} {...props} />}/>
      <Route exact path={`/budgets/${this.props.name}/expenses`} render={props => <ExpenseListModal budget_name={this.props.name} budget_id={this.props.budget_id} {...props}/>}/>
      <Route exact path={`/budgets/${this.props.name}/delete`} render={props => <ConfirmDelete budget_id={this.props.budget_id} {...props}/>}/>
     </Router>
    );
  }
}

export default Budgetcard;
