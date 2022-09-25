<template>
  <div>
  <EmailVerificationRequest/>
<!--  <EmailVerificationRequest
    :firebase="firebase"
  />-->
  <section id="firebaseui-auth-container"></section>
  </div>
</template>

<script>
/* eslint-disable no-console */

//import firebase from "firebase";
//import firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from 'firebaseui';
import EmailVerificationRequest from './EmailVerificationRequest.vue'

//import "firebase/firestore";
//import axios from 'axios';

export default {
//  props: ['firebase'],
  components: {
    EmailVerificationRequest
  },
  props: {
    tosUrl: {type: String, default: ""},
    privacyPolicyUrl: {type: String, default: ""},
  },
  data: function () {
    return {
//      is_login: false,
    }
  },
  methods: {
    path_to_types_with_id: function(id){
      return "/types/" + id;
    },
  },
  mounted() {
    console.log("login firebase:", this.firebase)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // set user globals
        this.$isLogin = true;
        this.$displayName = user.displayName
        this.$user_email  = user.email
        this.$user_id     = user.uid

        // set $internalUserId
      } else {
        let ui = firebaseui.auth.AuthUI.getInstance();
        // ACS for sendEmailVerification() 
        let actionCodeSettings = {
        //  url: 'https://www.example.com/?email=' + firebase.auth().currentUser.email,
          url: location.href,
        /*  iOS: {
            bundleId: 'com.example.ios'
          },
          android: {
            packageName: 'com.example.android',
            installApp: true,
            minimumVersion: '12'
          },*/
          handleCodeInApp: true
        };
        let uiConfig = {
          callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl) {
              // User successfully signed in.
              // Return type determines whether we continue the redirect automatically
              // or whether we leave that to developer to handle.
              if (!firebase.auth().currentUser.emailVerified){
                firebase.auth().currentUser.sendEmailVerification(actionCodeSettings);
                return false;
              }
              return true;
            },
            uiShown: function() {
              // The widget is rendered.
              // Hide the loader.
            }
          },
          signInSuccessUrl: "/",
          signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID, 
                          /* firebase.auth.FacebookAuthProvider.PROVIDER_ID */
                        ],
    //      signInOptions: [this.firebase.auth.EmailAuthProvider.PROVIDER_ID],
          credentialHelper: firebaseui.auth.CredentialHelper.NONE
        };
        // add tosUrl
        if (this.tosUrl != ""){
          uiConfig.tosUrl = this.tosUrl
        }
        // add privacyPolicyUrl
        if (this.privacyPolicyUrl != ""){
          uiConfig.privacyPolicyUrl = this.privacyPolicyUrl
        }
        console.log("uiConfig", uiConfig)
        if (!ui) {
          ui = new firebaseui.auth.AuthUI(firebase.auth());
          ui.start("#firebaseui-auth-container", uiConfig);
        }
      }
    });
  },
}
</script>
