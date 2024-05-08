const mongoose = require('../services/dbConection');

const userSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    telefono: {type: String}
});

const User = mongoose.model('User', userSchema);
module.exports = User;
