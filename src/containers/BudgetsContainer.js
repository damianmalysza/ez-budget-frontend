import React, { Component } from 'react';
import BudgetCard from '../components/BudgetCard'

class Budgetscontainer extends Component {
  render() {
    return (
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1rem",
        alignItems: "flex-start"
      }}>
        Render cards for budgets here
        <BudgetCard />
      </div>
    );
  }
}

export default Budgetscontainer;
