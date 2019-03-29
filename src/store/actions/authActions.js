export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({type: 'LOGIN_SUCCESS'})
    }).catch((err) => {
      dispatch({type: 'LOGIN_ERR', err})
    })
  }
}


export const signOut = () => {
  return (dispatch, getState, {getFirebase})  => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({type: 'SIGNOUT_SUCCESS'});
    });
  }
}

// export const createUser = () => {
//   return (dispatch, getState, {getFirebase, getFirestore}) => {
//     const firebase = getFirebase();
//     const firestore = getFirestore();
//
//     firebase.auth.
//   }
// }
