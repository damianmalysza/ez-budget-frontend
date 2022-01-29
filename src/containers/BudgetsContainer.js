import React, { Component } from 'react';
import BudgetCard from '../components/BudgetCard'
import { connect } from 'react-redux'
import {fetchBudgets} from '../actions/fetchBudgets'

// this component should be connected to redux and grab all the budgets from state
// should use a react lifecycle method to dispatch the fetchbudgets action 

class BudgetsContainer extends Component {
  componentDidMount() {
    // todo: action is being hit - edit action to fetch budgets from API and load into state
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
        Render cards for budgets here
        {/* todo: use map method to iterate over budgets from redux store and render budgetcard for each */}
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
    fetchBudgets: () => dispatch(fetchBudgets())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BudgetsContainer);
