import Vue from 'vue'
import AccountFront from './AccountFront.vue'
import ChangeEmail from './ChangeEmail.vue'
import ChangeName from './ChangeName.vue'
import NewPassword from './NewPassword.vue'
import SignOut from './SignOut.vue'
import DeleteAccount from './DeleteAccount.vue'

export default {
  routes: [
    {
      path: '/account',
      name: 'account',
      component: AccountFront
//      component: () => import(/* webpackChunkName: "about" */ '@/views/account/AccountFront.vue')
    },
    {
      path: '/changeemail',
      name: 'changeemail',
      component: ChangeEmail
//      component: () => import(/* webpackChunkName: "about" */ '@/views/account/ChangeEmail.vue')
    },
    {
      path: '/changename',
      name: 'changename',
      component: ChangeName
//      component: () => import(/* webpackChunkName: "about" */ '@/views/account/ChangeName.vue')
    },
    {
      path: '/newpassword',
      name: 'newpassword',
      component: NewPassword
//      component: () => import(/* webpackChunkName: "about" */ '@/views/account/NewPassword.vue')
    },
    {
      path: '/signout',
      name: 'signout',
      component: SignOut
//      component: () => import(/* webpackChunkName: "about" */ '@/views/account/SignOut.vue')
    },
    {
      path: '/deleteaccount',
      name: 'deleteaccount',
      component: DeleteAccount
//      component: () => import(/* webpackChunkName: "about" */ '@/views/account/DeleteAccount.vue')
    },
  ],
  menuItem: { icon: 'face', text: 'Account', route: '/account'},
  init: () => {
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
//        $koshinto: process.env.VUE_APP_koshintoProtocol + "://" 
//                   + process.env.VUE_APP_koshintoHost +"."
//                   + process.env.VUE_APP_koshintoDomain,
      }
    });
    Vue.mixin({
      computed: {
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
      }
    })
    return
  }
}