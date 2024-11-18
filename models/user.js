const {default: mongoose} = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        email:['user','admin'],
        default:'user'
    }
})

module.exports = mongoose.model('User', userSchema, 'users');

