const express = require('express');
const router = express.Router();
const callbacks = require('../helper/admin');

router.route('/')
    .get(callbacks.getAdminList)
    .post(callbacks.addAdmin)
    .patch(callbacks.updateAdminInfo)
    .delete(callbacks.deleteAdmin)

module.exports = router;