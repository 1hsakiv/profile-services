const express = require('express');
const router = express.Router();

const callbacks = require('../helper/school');

router.route('/')
    .get(callbacks.getSchoolList)
    .post(callbacks.addSchool)
    .patch(callbacks.updateSchoolInfo)
    .delete(callbacks.deleteSchool)

module.exports = router;