import PurchaseFront from './PurchaseFront.vue'
import PurchaseBind from './PurchaseBind.vue'
import PurchaseSucceeded from './PurchaseSucceeded.vue'
import Payments from './Payments.vue'

export default {
  routes: [
    {
      path: '/purchase',
      name: 'purchase',
      component: PurchaseFront
    },
    {
      path: '/purchaseBind',
      name: 'purchaseBind',
      component: PurchaseBind
    },
    {
      path: '/purchaseSucceeded/:sessionID',
      name: 'purchaseSucceeded',
      component: PurchaseSucceeded
    },
    {
      path: '/payments',
      name: 'payments',
      component: Payments
    },
  ],
  menuItem: { icon: 'shop', text: 'Purchase', route: '/purchase'},
}