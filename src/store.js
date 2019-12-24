import { createStore, combineReducers, compose }  from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer} from 'redux-firestore' 
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';

// configurar firestore
const firebaseConfig = {
    apiKey: "AIzaSyAE7U6o-DzJVfX4cjP_wfwQt8rsFwrVx3A",
    authDomain: "bibliostore-f241f.firebaseapp.com",
    databaseURL: "https://bibliostore-f241f.firebaseio.com",
    projectId: "bibliostore-f241f",
    storageBucket: "bibliostore-f241f.appspot.com",
    messagingSenderId: "569652251621",
    appId: "1:569652251621:web:a0457e6b27a17ffa897d0c"
}

// inicializar firebase
firebase.initializeApp(firebaseConfig)

// configuracion de react-redux
const rrfConfig = {
    userProfile : 'users',
    useFirestoreForProfile: true
}

// crear el enhacer con compose de redux y firestore
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore)

// Reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

// state inicial
const initialState = {};

// create el store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase, rrfConfig),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;