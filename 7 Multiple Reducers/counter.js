// REDCUER
function counterReducer(state, action) {

  if (typeof state === 'undefined') {
    return { count: 0 }
  }

  var nextState = {
    count: state.count
  }

  switch (action.type) {
    case 'ADD':
      nextState.count = state.count + 1
      return nextState
      break;
    case 'MINUS':
      nextState.count = state.count - 1
      return nextState
      break;
    case 'RESET':
      nextState.count = 0
      return nextState
      break;
    default:
      return state
  }
}

// Todo Reducer
function todosReducer(state, action) {
	if (typeof state === 'undefined') {
		return { todos: [] }
	}

	var nextState = Object.assign({}, state);

	switch (action.type) {
		case 'NEW':
			nextState.todos.push(action.payload)
			return nextState;
			break;
		case 'DELETE':
			nextState.todos.pop();
			return nextState;
			break;
		case 'DELETE_ALL':
			nextState.todos = []
			return nextState;
			break;
		default:
			return state
	}
}

// STORE
var store = Redux.createStore(Redux.combineReducers({ counterReducer: counterReducer, todosReducer: todosReducer}));
var counterEl = document.getElementById('counter');
var todosInput = document.getElementById('todos');
var todosList = document.getElementById('todosList');

function render() {
  var state = store.getState()
  counterEl.innerHTML = state.counterReducer.count.toString()
	renderList(state);
}

function renderList(state) {
	todosList.innerHTML = '';
	for (var i = 0; i < state.todosReducer.todos.length; i++) {
		var li = document.createElement('li');
		var todo = state.todosReducer.todos[i];
		li.innerHTML = todo.toString()
		todosList.appendChild(li);
	}
}

render()
store.subscribe(render)

// ACTIONS
document.getElementById('add')
  .addEventListener('click', function() {
    store.dispatch({ type: 'ADD' })
  })

document.getElementById('minus')
  .addEventListener('click', function() {
    store.dispatch({ type: 'MINUS' })
  })

document.getElementById('reset')
  .addEventListener('click', function() {
    store.dispatch({ type: 'RESET' })
  })

document.getElementById('new')
	.addEventListener('click', function() {
		store.dispatch({ type: 'NEW', payload: todosInput.value })
	})

document.getElementById('delete')
	.addEventListener('click', function () {
		store.dispatch({ type: 'DELETE' })
	})

document.getElementById('delete_all')
	.addEventListener('click', function () {
		store.dispatch({ type: 'DELETE_ALL' })
	})