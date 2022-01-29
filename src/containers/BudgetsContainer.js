import React, { Component } from 'react';
import BudgetCard from '../components/BudgetCard'
import { connect } from 'react-redux'

// this component should be connected to redux and grab all the budgets from state
// should use a react lifecycle method to dispatch the fetchbudgets action 

class BudgetsContainer extends Component {
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

const mapStateToProps = state => {
  return {
    budgets: state.budgets
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBudgets: dispatch
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BudgetsContainer);
