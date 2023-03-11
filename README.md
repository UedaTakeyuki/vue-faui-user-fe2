# 2023.03.11: Deprecated the successor is [vue2-faui-user-fe](https://www.npmjs.com/package/vue2-faui-user-fe) for Vue2, for Vue3 now under planning.
- 2023.03.11: [vue2-faui-user-fe](https://www.npmjs.com/package/vue2-faui-user-fe) is about half size more compact of [vue-faui-user-fe2](https://www.npmjs.com/package/vue-faui-user-fe2) and be cleaned there usage up. This is for Vue2 only, Vue3 and Vuetify3 support is now under planning.

# Vue Firebase auth ui user management frontend pack
Provide following feature to your vue app.
- Sign Up / Sign In by firebase auth ui with email with verification request(original of this package).
- Account Management (cange name and email address, delete account, etc).
- Attach to [vuetify-nav](https://www.npmjs.com/package/vuetify-nav).
- ``getIdToken()`` async function that makes it easy for you to use idToken.

as follows:

### Sign Up / Sign In
<img src="https://github.com/UedaTakeyuki/vue-faui-user-fe2/blob/main/img/ss.2021-04-03 20.23.10.png" width="30%"/>  <img src="https://github.com/UedaTakeyuki/vue-faui-user-fe2/blob/main/img/ss.2021-04-03 20.20.29.png" width="30%"/>  <img src="https://github.com/UedaTakeyuki/vue-faui-user-fe2/blob/main/img/ss.2021-04-04 11.39.02.png" width="30%"/>

### Account Management
  <img src="https://github.com/UedaTakeyuki/vue-faui-user-fe2/blob/main/img/ss.2021-04-03 20.21.04.png" width="30%"/>  <img src="https://github.com/UedaTakeyuki/vue-faui-user-fe2/blob/main/img/ss.ss.2021-04-03 20.21.04.png" width="30%"/>  <img src="https://github.com/UedaTakeyuki/vue-faui-user-fe2/blob/main/img/ss.2021-04-03 20.21.14.png" width="30%"/>  <img src="https://github.com/UedaTakeyuki/vue-faui-user-fe2/blob/main/img/ss.2021-04-03 20.21.31.png" width="30%"/>  <img src="https://github.com/UedaTakeyuki/vue-faui-user-fe2/blob/main/img/ss.2021-04-03 20.21.43.png" width="30%"/>  <img src="https://github.com/UedaTakeyuki/vue-faui-user-fe2/blob/main/img/ss.2021-04-03 20.21.53.png" width="30%"/>  <img src="https://github.com/UedaTakeyuki/vue-faui-user-fe2/blob/main/img/ss.2021-04-03 20.22.06.png" width="30%"/>  
  
### Attach to [vuetify-nav](https://www.npmjs.com/package/vuetify-nav).
<img src="https://github.com/UedaTakeyuki/vue-faui-user-fe2/blob/main/img/ss.2021-04-03 20.20.52.png" width="30%"/>

## Install

```bash:
npm install vue-faui-user-fe2 

# or

yarn add vue-faui-user-fe2
```

## How to setup
refer [wiki](https://github.com/UedaTakeyuki/vue-faui-user-fe2/wiki/How-to-setup)

## Demo
Demo site is available at [here](https://vue-faui-user-fe-sample.uedasoft.com/).
You can try to **Create account**, **Login**, **Account management**, **Logout**, **Delete account** on this site.

## Q&A
Github [issues](https://github.com/UedaTakeyuki/vue-faui-user-fe2/issues) are available. Any questions, suggestions, reports are welcome!

## Author
[Dr. Takeyuki UEDA](https://atelierueda.uedasoft.com/)

## History
- 1.0.0  2021.06.26 created from https://github.com/UedaTakeyuki/vue-faui-user-fe
- 1.1.1  2021.06.28 interface change (backword compatibility has still remained)
- 1.2.1  2021.06.29 interface change (backword compatibility has still remained)
- 1.3.1  2022.02.19 add ``getIdToken()`` async function
- 1.3.2  2022.02.24 fix: $displayName, $user_email, $user_id were not updated after login.
