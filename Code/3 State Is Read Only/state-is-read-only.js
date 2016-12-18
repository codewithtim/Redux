const state = [
  {
    id: 1,
    project: 'Mission to Mars',
    goal: 1000,
    funded: false
  },
  {
    id: 2,
    project: 'Mission to Venus',
    goal: 1000,
    funded: false
  }
]

{
  type: 'ADD_PROJECT',
  project: 'Mission to Mercury',
  goal: 9999
}

[
  {
    id: 1,
    project: 'Mission to Mars',
    goal: 1000,
    funded: false
  },
  {
    id: 2,
    project: 'Mission to Venus',
    goal: 1000,
    funded: false
  },
  {
    id: 3,
    project: 'Mission to Mercury',
    goal: 9999,
    funded: false
  }
]
