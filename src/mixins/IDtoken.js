import firebase from "firebase/app";
import "firebase/auth";


export default {
  methods: {
    getIdToken: async function() {
      var user = firebase.auth().currentUser;
      if (user){
        const idToken = await user.getIdToken()
        return idToken
      } else {
        return ""
      }
    }
  }
}