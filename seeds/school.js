const mongoose = require('mongoose');
const logger = require('../config/logger');
const School = require('../models/school')
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/profileService';

mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
})
      .then(() => {
            logger.log('info', 'DB connection opened (school.js SEEDS FILE)');
      })
      .catch(err => {
            console.log('Something went wrong');
            console.log(err);
            logger.log('info', `DB connection failed (school.js SEEDS FILE):: ${err}`);
      });

schoolList = [
      {
            name: 'School 1',
            email: 'school1@gmail.com',
      },
      {
            name: 'School 2',
            email: 'school2@gmail.com',
      },
      {
            name: 'School 3',
            email: 'school3@gmail.com',
      },
      {
            name: 'School 4',
            email: 'school4@gmail.com',
      }
]

const insertSchoolList = () => {
      School.insertMany(schoolList)
            .then(s => {
                  logger.log('info', `schools added ${s}`);
            })
            .catch(err => {
                  logger.log('info', `error while adding schools:: ${err}`);
                  console.log(err);
            })
}

insertSchoolList();