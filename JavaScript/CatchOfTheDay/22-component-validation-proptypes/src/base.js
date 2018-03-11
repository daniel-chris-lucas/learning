import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAMGgsk23I66H8yAgWmXu7Lhwl6baPUaJc",
    authDomain: "catch-of-the-day-d1071.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-d1071.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;