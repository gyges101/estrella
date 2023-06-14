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



const LivreurModel = new mongoose.Schema({
    name : {
        type: String,
        required: true
    }, 
    chatId: {
        type: String,
        required: true
    }
})

const CategorieModel = new mongoose.Schema({
    name : {
        type: String,
        required: true
    }, 
    icon: {
        data: Buffer,
        contentType: String
    }
})

const ArticleModel = new mongoose.Schema({
    categorie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorie'
    },
    name : {
        type: String,
        required: true
    }, 
    price : {
        type: Number,
        required: true
    }, 
    image: {
        data: Buffer,
        contentType: String
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
const Livreur = mongoose.model('livreur', LivreurModel);
const Categorie = mongoose.model('categorie', CategorieModel);
const Article = mongoose.model('article', ArticleModel);


module.exports = {
    Users, Livreur, Categorie, Article
}