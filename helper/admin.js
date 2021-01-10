const logger = require('../config/logger');
const Admin = require('../models/admin');
const callbacks = {};

callbacks.getAdminList = (req, res) => {
    Admin.find(req.query)
        .then(t => {
            logger.log('info', `Fetched admin's list`);
            res.json(t);
        })
        .catch(err => {
            logger.log('info', `Error while getting admin's list: ${err}`);
            res.status(404).json({ message: err.message });
        })
}

callbacks.addAdmin = (req, res) => {
    const admin = new Admin(req.body);
    admin.save()
        .then(t => {
            logger.log('info', `Successfully added admins to DB`);
            res.json(t);
        })
        .catch(err => {
            logger.log('info', `ERROR failed to add admins in DB: ${err}`);
            res.status(404).json({ message: err.message });
        })
}

callbacks.updateAdminInfo = (req, res) => {
    const { _id } = req.query;

    if (!_id) {
        logger.log('info', 'id to be updated is not specified!');
        res.status(404).json({ message: 'id to be updated is not specified!' });
    }

    Admin.findByIdAndUpdate(_id, req.body, { new: true })
        .then(t => {
            logger.log('info', `Successfully updated ${_id} info`);
            res.json(t);
        })
        .catch(err => {
            logger.log('info', `ERROR failed to update admins info: ${err}`);
            res.status(404).json({ message: err.message });
        })
}

callbacks.deleteAdmin = (req, res) => {
    const { _id } = req.query;

    if (!_id) {
        logger.log('info', 'id to be deleted is not specified');
        res.status(404).json({ message: 'id to be deleted is not specified!' });
    }

    Admin.findByIdAndDelete(_id)
        .then(t => {
            logger.log('info', `successfully deleted ${_id} from DB`);
            res.json(t);
        })
        .catch(err => {
            logger.log('info', `ERROR failed to delete ${_id}: ${err}`);
            res.status(404).json({ message: err.message });
        })
}

module.exports = callbacks;