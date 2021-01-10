const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profileImageUrl: {
        type: String
    },
    mobileNo: {
        type: String
    }
});

const School = mongoose.model('School', schoolSchema);

module.exports = School;