const express = require('express')
const router = express.Router()
const {newPayment,getOrderId,getType,stkPush,token,mpesaMessage,getPay,getPayments,getUser} = require('../controllers/payment')

router.route('/newpayment').post(newPayment);
router.route('/payments').get(getPayments);
router.route('/pay/:id').get(getPay);
router.route('/stk/push').post(token,stkPush);
router.route('/stk/response').post(mpesaMessage);
router.route('/getUser').post(getUser);
router.route('/getType').post(getType);
router.route('/getOrderId').post(getOrderId);


module.exports = router