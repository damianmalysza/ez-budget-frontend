export function removeBudget(budgetId){
  return dispatch => {
    fetch(`http://localhost:3001/budgets/${budgetId}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(budgetId)
    }).then(response => response.json())
    .then(data => {
      dispatch({type:"DELETE_BUDGET",payload:data})
    })
  }
}