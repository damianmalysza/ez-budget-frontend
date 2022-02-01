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
            {/* todo: make this button open up the add expense form modal */}
           <Button variant="outline-primary" className="ms-auto">Add Expense</Button>
           {/* todo: make this button open the view expenses modal */}
           {/* think about how expenses should be stored, they are brought in through the budgets state but maybe they should be in their own state? */}
           <Button variant="outline-secondary">View Expenses</Button>
         </Stack>
       </Card.Body>
     </Card> 
    );
  }
}

export default Budgetcard;
