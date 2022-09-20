const express = require('express')
const router = express.Router()
const {
createpromotion,
createpromotion2,
updatepromotion,
updatepromotion2
} = require('../controllers/promotion')

router.route('/promo').post(createpromotion)
router.route('/promo2').post(createpromotion2)
router.route('/updatepromo/:id').patch(updatepromotion)
router.route('/updatepromo2/:id').patch(updatepromotion2)

module.exports = router