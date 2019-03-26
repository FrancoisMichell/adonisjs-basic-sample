'use strict'

const User = use('App/Models/User')

class UserController {
  async create ({ request, auth }) {
    const user = await User.create(request.only(["username", "email", "password"]))
    const token = await auth.attempt(user.email, request.input('password'))

    return {success: true, token}
  }
  
}

module.exports = UserController
