const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['male', 'female', 'other']
    },
    dob: {
        type: Date,
        required: true
    },
    mobNumber: {
        type: String
    },
    profielImageUrl: {
        type: String
    }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
