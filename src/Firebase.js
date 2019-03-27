import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyCUY_0DYpXTOZQPsgOEgtt2g-khMM9barc",
     authDomain: "my-todo-eec26.firebaseapp.com",
     databaseURL: "https://my-todo-eec26.firebaseio.com",
     projectId: "my-todo-eec26",
     storageBucket: "my-todo-eec26.appspot.com",
     messagingSenderId: "709568358095"
};
firebase.initializeApp(config);
firebase.firestore()
export default firebase;
