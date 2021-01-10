const mongoose = require('mongoose')
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
            logger.log('Something went wrong');
            logger.log(err);
            logger.log('info', `DB connection failed (admin.js SEEDS FILE):: ${err}`);
      });        

adminList = [
      {
            name: 'Admin1',
            gender: 'male',
            mobNumber: '8828328328',
            email: 'admin1@gmail.com',
            dob: '2000/03/23'
      },
      {
            name: 'Admin2',
            gender: 'female',
            mobNumber: '9998989900',
            email: 'admin2@gmail.com',
            dob: '2002/07/13'
      },
      {
            name: 'Admin3',
            gender: 'male',
            mobNumber: '18212932893838',
            email: 'admin3@gmail.com',
            dob: '2001/02/20'
      },
      {
            name: 'Admin4',
            gender: 'female',
            mobNumber: '27677632873287',
            email: 'admin4@walmart.com',
            dob: '1991/01/01'
      }
]

const insertAdminList = () => {
      Admin.insertMany(adminList)
            .then(s => {
                  logger.log('info', `admins added ${s}`);
            })
            .catch(err => {
                  logger.log('info', `error while adding admins:: ${err}`);
                  logger.log(err);
            })
}

insertAdminList();