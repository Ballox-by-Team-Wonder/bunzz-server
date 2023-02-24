const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: { type: String, required: true, trim: true, minlength: 3 },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    firstName: { type: String, required: false, minlength: 3, default: "" },
    lastName: { type: String, required: false, minlength: 3, default: "" },
    otherNames: { type: String, required: false, minlength: 3, default: "" },
    residentAddress: { type: String, required: false, minlength: 3, default: "" },
    residentState: { type: String, required: false, minlength: 3, default: "" },
    residentLga: { type: String, required: false, minlength: 3, default: "" },
    residentTown: { type: String, required: false, minlength: 3, default: "" },
    stateOfOrigin: { type: String, required: false, minlength: 3, default: "" },
    lgaOfOrigin: { type: String, required: false, minlength: 3, default: "" },
    townOfOrigin: { type: String, required: false, minlength: 3, default: "" },
    dateOfBirth: { type: String, required: false, minlength: 3, default: ""},
    phoneNumber: { type: Number, required: false, minlength: 3, default: "" },
    bvn: { type: Number, required: false, minlength: 3, default: "" },
    nin: { type: Number, required: false, minlength: 3, default: "" },
    accountNumber: { type: Number, required: false, minlength: 3, default: "" },
    bankName: { type: String, required: false, minlength: 3, default: "" }
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema)

module.exports = User;