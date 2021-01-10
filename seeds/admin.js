const mongoose = require('mongoose');
const logger = require('../config/logger');
const Admin = require('../models/admin')
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/profileService';

mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
      .then(() => {
            logger.log('info', 'DB connection opened (admin.js SEEDS FILE)');
      })
      .catch(err => {
            console.log('Something went wrong');
            console.log(err);
            logger.log('info', `DB connection failed (admin.js SEEDS FILE):: ${err}`);
      });

adminList = [
      {
            name: 'Admin 1',
            gender: 'male',
            email: 'admin1@gmail.com',
            dob: '1999/03/23'
      },
      {
            name: 'Admin 2',
            gender: 'male',
            email: 'admin2@gmail.com',
            dob: '1999/07/13'
      },
      {
            name: 'Admin 3',
            gender: 'male',
            email: 'admin3@gmail.com',
            dob: '2000/02/20'
      },
      {
            name: 'Admin 4',
            gender: 'male',
            email: 'admin4@walmart.com',
            dob: '1997/01/01'
      }
]

const insertAdminList = () => {
      Admin.insertMany(adminList)
            .then(s => {
                  logger.log('info', `admins added ${s}`);
            })
            .catch(err => {
                  logger.log('info', `error while adding admins:: ${err}`);
                  console.log(err);
            })
}

insertAdminList();