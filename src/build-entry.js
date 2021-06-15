import AccountFront    from './views/account/AccountFront.vue';
import AccountFrontCDN from './views.cdn/account/AccountFront.vue';
import PurchaseFront   from './views/purchase/PurchaseFront.vue';
import PurchaseFrontCDN from './views.cdn/purchase/PurchaseFront.vue';
import AccountRoutes    from './views/account/account.route.js'
import AccountRoutesCDN from './views.cdn/account/account.route.js'
import PurchaseRoutes    from './views/purchase/purchase.route.js'
import PurchaseRoutesCDN from './views.cdn/purchase/purchase.route.js'
import Login    from './components/Login.vue'
import LoginCDN from './components.cdn/Login.vue'
import EmailVerificationRequest    from './components/EmailVerificationRequest.vue'
import EmailVerificationRequestCDN from './components.cdn/EmailVerificationRequest.vue'


// Named export
export {
	AccountFront,
	AccountFrontCDN,
	AccountRoutes,
	AccountRoutesCDN,
	PurchaseFront,
	PurchaseFrontCDN,
	PurchaseRoutes,
	PurchaseRoutesCDN,
	Login,
	LoginCDN,
	EmailVerificationRequest,
	EmailVerificationRequestCDN
};

// Default export
export default {
	AccountFront,
	AccountFrontCDN,
	AccountFront,
	AccountFrontCDN,
	PurchaseFront,
	PurchaseFrontCDN,
	PurchaseRoutes,
	PurchaseRoutesCDN,
	Login,
	LoginCDN,
	EmailVerificationRequest,
	EmailVerificationRequestCDN
};