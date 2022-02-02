import React, { Component } from 'react';
import BudgetCard from '../components/BudgetCard'
import { connect } from 'react-redux'
import {fetchBudgets} from '../actions/fetchBudgets'

// this component should be connected to redux and grab all the budgets from state
// should use a react lifecycle method to dispatch the fetchbudgets action 

class BudgetsContainer extends Component {
  componentDidMount() {
    this.props.fetchBudgets()
  }
  
  render() {
    return (
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1rem",
        alignItems: "flex-start"
      }}>
        {this.props.budgets.map(budget => <BudgetCard key={budget.id} 
        name={budget.attributes.name} 
        budget_max={budget.attributes.budget_max}
        expenses={budget.attributes.expenses}  
        />)}
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
    fetchBudgets: () => dispatch(fetchBudgets())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BudgetsContainer);
