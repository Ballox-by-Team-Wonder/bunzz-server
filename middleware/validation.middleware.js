const validator = require('../services/validation.service')

function validateSignup(req, res, next) {
    const validationRule = {
        fullName: "required|string",
        email: "required|string",
        password: "required|string",
        confirmPassword: "required|string"
    }
    validator(req.body, validationRule, res, next)
}

function validateLogin(req, res, next) {
    const validationRule = {
        email: "required|string",
        password: "required|string",
    }
    validator(req.body, validationRule, res, next)
}

function validateOnboardUser(req, res, next) {
    const validationRule = {
        firstName: "required|string",
        lastName: "required|string",
        otherNames: "string",
        residentAddress: "string",
        residentState: "required|string",
        residentLga: "required|string",
        residentTown: "string",
        stateOfOrigin: "required|string",
        lgaOfOrigin: "required|string",
        townOfOrigin: "string",
        dateOfBirth: "required|string",
        phoneNumber: "required|number",
        bvn: "required|number",
        nin: "required|number",
        accountNumber: "required|number",
        bankName: "required|string"
    }
    validator(req.body, validationRule, res, next)
}


module.exports = {
    validateSignup,
    validateLogin,
    validateOnboardUser
}