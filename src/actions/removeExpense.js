export function removeExpense(expense,budgetId){
  return dispatch => {
    fetch(`http://localhost:3001/budgets/${budgetId}/expenses/${expense.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expense)
    }).then(response => response.json())
    .then(data => {
      dispatch({type:"UPDATE_BUDGET_EXPENSES",payload:data})
    })
  }
}