const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: { type: String, required: true, trim: true, minlength: 3 },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    firstName: { type: String, required: false, minlength: 3 },
    lastName: { type: String, required: false, minlength: 3 },
    otherNames: { type: String, required: false, minlength: 3 },
    residentAddress: { type: String, required: false, minlength: 3 },
    residentState: { type: String, required: false, minlength: 3 },
    residentLga: { type: String, required: false, minlength: 3 },
    residentTown: { type: String, required: false, minlength: 3 },
    stateOfOrigin: { type: String, required: false, minlength: 3 },
    lgaOfOrigin: { type: String, required: false, minlength: 3 },
    townOfOrigin: { type: String, required: false, minlength: 3 },
    dateOfBirth: { type: String, required: false, minlength: 3},
    phoneNumber: { type: Number, required: false, minlength: 3 },
    bvn: { type: Number, required: false, minlength: 3 },
    nin: { type: Number, required: false, minlength: 3 },
    accountNumber: { type: Number, required: false, minlength: 3 },
    bankName: { type: String, required: false, minlength: 3 }
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema)

module.exports = User;