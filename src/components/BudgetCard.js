import React, { Component } from 'react';
import { Button, Card, Stack } from "react-bootstrap"

class Budgetcard extends Component {
  render() {
    return (
     <Card >
       <Card.Body>
         <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
           <div className="me-2">{this.props.name}</div>
           <div className="d-flex align-items-baseline">
             <span className="text-muted fs-6 ms-1">${this.props.budget_max}</span>
           </div>
         </Card.Title>
         <Stack direction="horizontal" gap="2" className="mt-4">
         
           <Button variant="outline-primary" className="ms-auto">Add Expense</Button>
           <Button variant="outline-secondary">View Expenses</Button>
         </Stack>
       </Card.Body>
     </Card> 
    );
  }
}

export default Budgetcard;
