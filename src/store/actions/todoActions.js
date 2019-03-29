export const createTodo = (todo) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make async calls to database
    const firestore = getFirestore();
    firestore.collection('todo').add({
      ...todo
    }).then(() => {
      dispatch({type: 'CREATE_TODO', todo});
    }).catch((err) => {
      dispatch({type: 'CREATE_TODO_ERR', err});
    })
  }
};
