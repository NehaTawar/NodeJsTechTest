
const userController = require("../controller/userController.js")
module.exports = function (app) {
    app.post('/signup',userController.registerUser);
}
