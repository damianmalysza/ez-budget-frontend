export function fetchBudgets(){
  return dispatch => {
    // if have time: set up an action for indicating loading of this (maybe a moving ellipsis?)
    fetch("http://localhost:3001/budgets")
    .then(response => response.json())
    .then(json => {
      dispatch({type: "ADD_BUDGETS", payload: json.data})
    })
  }
}