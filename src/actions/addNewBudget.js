export function addNewBudget(budgetData){
  return dispatch => {
    fetch('http://localhost:3001/budgets',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(budgetData)
    }).then(response => response.json())
    .then(data => {
      //todo : figure out behavior if adding wasn't successful
      dispatch({type:"ADD_NEW_BUDGET",payload:data});
    })
  }
}