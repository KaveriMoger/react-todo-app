const initState = {
  todos: [
    {id:1, title:"aaaa", age:"15"},
    {id:2, title:"bbbb", age:"18"},
    {id:3, title:"cccc", age:"98"}
  ]

}

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      console.log('created todo', action.todo)
      return state;
    case 'CREATE_TODO_ERR':
      console.log('created todo error', action.err)
      return state;
    default:
      return state;
  }
}

export default todoReducer
