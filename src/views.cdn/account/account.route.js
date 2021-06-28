import Vue from 'vue'
import AccountFront from './AccountFront.vue'
import ChangeEmail from './ChangeEmail.vue'
import ChangeName from './ChangeName.vue'
import NewPassword from './NewPassword.vue'
import SignOut from './SignOut.vue'
import DeleteAccount from './DeleteAccount.vue'

//import * as firebase from 'firebase'

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
  routes: [
    {
      path: '/account',
      name: 'account',
      component: AccountFront
    },
    {
      path: '/changeemail',
      name: 'changeemail',
      component: ChangeEmail
    },
    {
      path: '/changename',
      name: 'changename',
      component: ChangeName
    },
    {
      path: '/newpassword',
      name: 'newpassword',
      component: NewPassword
    },
    {
      path: '/signout',
      name: 'signout',
      component: SignOut
    },
    {
      path: '/deleteaccount',
      name: 'deleteaccount',
      component: DeleteAccount
    },
  ],
  menuItem: { icon: 'face', text: 'Account', route: '/account'},
  init: () => {
//    firebase.initializeApp(firebaseConfig);
    let globalData = new Vue({
      data: { 
//        $lang: get_browser_lang(),
        $isLogin: false,
        $isEmailVerified: false,
//        $internalUserId: "",
//        $stripe: process.env.VUE_APP_stripeEnv == "live" ? process.env.VUE_APP_stripeapiLiveKey : process.env.VUE_APP_stripeapiTestKey,
//        $stripeEnv: process.env.VUE_APP_stripeEnv,
        $server: process.env.VUE_APP_serverProtocol + "://" 
                 + process.env.VUE_APP_serverHost +"."
                 + process.env.VUE_APP_serverDomain,
      }
    });
    let computed = {
      //        $lang: {
      //          get: function () { return globalData.$data.$lang },
      //          set: function (newLang) { globalData.$data.$lang = newLang; }
      //        },
      $isLogin: {
        get: function () { return globalData.$data.$isLogin },
        set: function (newIsLogin) { globalData.$data.$isLogin = newIsLogin; }
      },
      $isEmailVerified: {
        get: function () { return globalData.$data.$isEmailVerified },
        set: function (newIsEmailVerified) { globalData.$data.$isEmailVerified = newIsEmailVerified; }
      },
      /*
      $internalUserId: {
        get: function () { return globalData.$data.$internalUserId },
        set: function (newInternalUserId) { globalData.$data.$internalUserId = newInternalUserId; }
      },
      */
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
      //        $stripe: {
      //          get: function () { return globalData.$data.$stripe },
      //        },
      //        $stripeEnv: {
      //          get: function () { return globalData.$data.$stripeEnv },
      //        },
      $server: {
        get: function () { return globalData.$data.$server },
      },
      //        $koshinto: {
      //          get: function () { return globalData.$data.$koshinto },
      //        },
    };
    return computed
/*
    Vue.mixin({
      computed: {
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
        $server: {
          get: function () { return globalData.$data.$server },
        },
      }
    })
    return
*/
  }
}