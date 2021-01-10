const logger = require('../config/logger');
const School = require('../models/school');
const callbacks = {};

callbacks.getSchoolList = (req, res) => {
    School.find(req.query)
        .then(s => {
            logger.log('info', `Fetched school's list`);
            res.json(s);
        })
        .catch(err => {
            logger.log('info', `Error while fetching school's list: ${err}`);
            res.status(404).json({ message: err.message });
        })
}

callbacks.addSchool = (req, res) => {
    const school = new School(req.body);
    callbacks.addSchool = (req, res) => {
        const school = new School(req.body);
        school.save()
            .then(s => {
                logger.log('info', `successfully added schools in DB`);
                res.json(s);
            })
            .catch(err => {
                logger.log('info', `ERROR failed to add schools in DB: ${err}`);
                res.status(404).json({ message: err.message });
            })
    }
}

callbacks.updateSchoolInfo = (req, res) => {
    const { _id } = req.query;

    if (!_id) {
        logger.log('info', 'id to be updated is not specified!');
        res.status(404).json({ message: 'id to be updated is not specified !' });
    }

    School.findByIdAndUpdate(_id, req.body, { new: true })
        .then(s => {
            logger.log('info', `Successfully updated ${_id} info`);
            res.json(s);
        })
        .catch(err => {
            logger.log('info', `ERROR failed to update schools info: ${err}`);
            res.status(404).json({ message: err.message });
        })
}

callbacks.deleteSchool = (req, res) => {
    const { _id } = req.query;

    if (!_id) {
        logger.log('info', 'id to be deleted is not specified');
        res.status(404).json({ message: 'id to be deleted is not specified !' });
    }

    School.findByIdAndDelete(_id)
        .then(s => {
            logger.log('info', `successfully deleted ${_id} from DB`);
            res.json(s);
        })
        .catch(err => {
            logger.log('info', `ERROR failed to delete ${_id}: ${err}`);
            res.status(404).json({ message: err.message });
        })
}

module.exports = callbacks;