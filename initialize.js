import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  databaseURL: process.env.VUE_APP_databaseURL,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId,
  appId: process.env.VUE_APP_appId,
};

export default {
  init: () => {
    let globalData = new Vue({
      data: { 
        $isLogin: false,
        $isEmailVerified: false,
      }
    });
    let computed = {
      $isLogin: {
        get: function () { return globalData.$data.$isLogin },
        set: function (newIsLogin) { globalData.$data.$isLogin = newIsLogin; }
      },
      $isEmailVerified: {
        get: function () { return globalData.$data.$isEmailVerified },
        set: function (newIsEmailVerified) { globalData.$data.$isEmailVerified = newIsEmailVerified; }
      },
      $displayName: {
        get: function () { return globalData.$data.$displayName },
        set: function (newDisplayName) { globalData.$data.$displayName = newDisplayName; }
      },
      $user_email: {
        get: function () { return globalData.$data.$user_email },
        set: function (newUser_email) { globalData.$data.$user_email = newUser_email; }
      },
      $user_id: {
        get: function () { return globalData.$data.$user_id },
        set: function (newUser_id) { globalData.$data.$user_id = newUser_id; }
      },
/*
      $server: {
        get: function () { return globalData.$data.$server },
      },
*/
    };
    return computed
  },
  accountinit: () => {
    let globalData = new Vue({
      data: { 
        $isLogin: false,
        $isEmailVerified: false,
/*
        $server: process.env.VUE_APP_serverProtocol + "://" 
                 + process.env.VUE_APP_serverHost +"."
                 + process.env.VUE_APP_serverDomain,
*/
      }
    });
    let computed = {
      $isLogin: {
        get: function () { return globalData.$data.$isLogin },
        set: function (newIsLogin) { globalData.$data.$isLogin = newIsLogin; }
      },
      $isEmailVerified: {
        get: function () { return globalData.$data.$isEmailVerified },
        set: function (newIsEmailVerified) { globalData.$data.$isEmailVerified = newIsEmailVerified; }
      },
      $displayName: {
        get: function () { return globalData.$data.$displayName },
        set: function (newDisplayName) { globalData.$data.$displayName = newDisplayName; }
      },
      $user_email: {
        get: function () { return globalData.$data.$user_email },
        set: function (newUser_email) { globalData.$data.$user_email = newUser_email; }
      },
      $user_id: {
        get: function () { return globalData.$data.$user_id },
        set: function (newUser_id) { globalData.$data.$user_id = newUser_id; }
      },
/*
      $server: {
        get: function () { return globalData.$data.$server },
      },
*/
    };
    return computed
  },
  purchaseinit: () => {
    let globalData = new Vue({
      data: { 
        $stripe: process.env.VUE_APP_stripeEnv == "live" ? process.env.VUE_APP_stripeapiLiveKey : process.env.VUE_APP_stripeapiTestKey,
        $stripeEnv: process.env.VUE_APP_stripeEnv,
      }
    });
    let computed = {
      $stripe: {
        get: function () { return globalData.$data.$stripe },
      },
      $stripeEnv: {
        get: function () { return globalData.$data.$stripeEnv },
      },
    }
    return computed
  },
  fbinit: () => {
    firebase.initializeApp(firebaseConfig);
  }
}