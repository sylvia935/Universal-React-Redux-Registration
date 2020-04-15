const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config');

module.exports = function () {
    // mongoose.connect(config.get('db'), { useNewUrlParser: true })
mongoose.connect('mongodb+srv://user1:<password>@volition-user-account-ullv2.mongodb.net/test?retryWrites=true&w=majority')
    
    .then(() => winston.info('Connection to MongoDB established successfully...'));
}