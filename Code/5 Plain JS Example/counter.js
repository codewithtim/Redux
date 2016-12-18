// REDUCER
function counter(currentState, action) {
  var nextState = {
    count: currentState.count
  }
  switch (action.type) {
    case 'ADD':
      nextState.count = currentState.count + 1
      return nextState
      break;
    case 'MINUS':
      nextState.count = currentState.count - 1
      return nextState
    case 'RESET':
      nextState.count = 0
      return nextState
    default:
      console.log('In Default');
      return currentState
  }
}

var state = { count: 0 }
var store = Redux.createStore(counter, state)
var counterEl = document.getElementById('counter')

console.log(store);

function render() {
  console.log('In Render');
  console.log(store.getState());
  var state = store.getState();
  counterEl.innerHTML = state.count.toString();
}

store.subscribe(render)

// ACTIONS
document.getElementById('add')
  .addEventListener('click', function() {
    store.dispatch({ type: 'ADD' })
  })

document.getElementById('minus')
  .addEventListener('click', function() {
    store.dispatch({ type: 'MINUS'})
  })

document.getElementById('reset')
  .addEventListener('click', function() {
    store.dispatch({ type: 'RESET'})
  })
