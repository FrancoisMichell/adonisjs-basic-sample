'use strict'

const { formatters } = use('Validator')
const Logger = use ('Logger')

class LoginUser {
  get formatter () {
    return formatters.JsonApi
  }
  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }

  get messages () {
    return {
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a password.'
    }
  }

  async fails(errorMessages) {
    Logger.info(errorMessages)
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = LoginUser
