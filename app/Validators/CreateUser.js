'use strict'

class CreateUser {
  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required'
    }
  }

  get messages () {
    return {
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a password'
    }
  }
}

module.exports = CreateUser