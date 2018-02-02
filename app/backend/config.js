
import inquirer from 'inquirer'

export default {
  port: 5000,
  db: function (env) {
    return new Promise((resolve, reject) => {
      if (process.env.MONGODB_URI) {
        resolve(process.env.MONGODB_URI)
      } else {
        if (env === 'production') {
          inquirer.prompt([{
            name: 'user',
            message: 'username?',
            default: ''
          },{
            type: 'password',
            name: 'pass',
            message: 'password?',
            default: ''
          }]).then((answers) => {
            resolve(`mongodb://${answers.user}:${answers.pass}@ds139197.mlab.com:39197/heroku_s06kk7fb`)
          })
        } else {
          resolve('mongodb://localhost/alotroladodelapagina')
        }
      }
    })
  }
}
