export function addNewExpense(expenseData){
  return dispatch => {
    fetch(`http://localhost:3001/budgets/${expenseData.budget_id}/expenses`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expenseData)
    }).then(response => response.json())
    .then(data => {
      dispatch({type:"ADD_EXPENSE_TO_BUDGET",payload:data})
    })
  }
}