const state = [
  {
    id: 1,
    project: 'Mission to Mars',
    goal: 1000,
    funded: false
  },
  {
    id: 2,
    project: 'Zombie Movie',
    goal: 1000,
    funded: false
  }
]

{
  type: 'ADD_PROJECT',
  project: 'Build Death Star',
  goal: 9999
}

{
  type: 'DELETE_PROJECT'
}
(currentState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      const nextState = [
        ...currentState,
        {
          id: 3,
          project: action.project,
          goal: action.goal,
          funded: false
        }
      ];
      return nextState;
      break;
    case 'DELETE_PROJECT':
      const nextState = //delete project
      return nextState;
      break;
    default:
      return currentState;
  }
}
