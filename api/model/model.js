const mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

// Users Model
const UsersModel = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: {unique: true}
    },
    role: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// Admin Model
const AdminModel = new mongoose.Schema({
    user_id: {
        UsersModel
    }
})


// Encrypting Before Saving
UsersModel.pre('save', function(next) {
    var user = this;

    // Hash only new users and ignore on update
    if (!user.isModified('password')) return next();

    if (user.role == 0){
        Admin.insertMany(user._id)
    }

    // else if (user.role == 1){
    //     Prof.insertMany(user._id)
    // }

    // generate a salt bcrypt string
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UsersModel.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

// Schemas Serialization 
const Users = mongoose.model('users', UsersModel);
const Admin = mongoose.model('admin', AdminModel);

module.exports = {
    Users, Admin
}