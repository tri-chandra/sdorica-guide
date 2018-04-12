import firebase from 'firebase'
import 'firebase/firestore'
import { config } from '@/config/FirebaseConfig'

let db = {}

export default {
  init(self) {
    firebase.initializeApp(config)

    db = firebase.firestore()

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        // self.$router.push('/success')
        self.isLoggedIn = true
      } else {
        // self.$router.push('/auth')
        self.isLoggedIn = false
      }
     })
  },
  renderLoginUI(uiId) {
    var uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      }
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start(`#${uiId}`, uiConfig)
  },
  loggedInUser() {
    const user = firebase.auth().currentUser
    if (user) {
      return {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        userId: user.uid
      }
    } else {
      return {
        photo: '',
        userId: '',
        name: '',
        email: '',
        user: {}
      }
    }
  },
  logout() {
    firebase.auth().signOut();
  },
  db() {
    return db
  }
}
