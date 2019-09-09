const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { usernameReg: username, email, passwordReg: password, street, city, state, zip, profile_pic } = req.body;
    //tested in postman, returns immediately if condition is met
    const user = await db.find_email([email]);
    if (user.length > 0) {
      return res.status(400).send({ message: "Email already in use" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    //tested in postman, inserts data correctly
    db.insert_user_info({ email, username, hash, street, city, state, zip, profile_pic})
      .then(result => {
        req.session.user = result[0];
        res
          .status(200)
          .send({
            message: "Logged in",
            user: req.session.user,
            loggedIn: true
          });
      })
      .catch(err => {
        res.status(500).send({ message: "Failed to register" });
      });
  },
  //tested in postman, login working correctly, sending back everything on the user table at the given username except the hash
  login: async (req, res) => {
      const db = req.app.get('db')
      const {username, password} = req.body
      const user = await db.find_email_and_hash([username])
      if (user.length === 0) {
          return res.status(400).send({message: 'username not found'})
      }
      const result = bcrypt.compareSync(password, user[0].hash)
      if (result) {
          delete user[0].hash
          req.session.user = user[0]
        //   console.log(req.session)
          return res.status(200).send({message: 'logged in', user: req.session.user, loggedIn: true})
      } else {
          return res.status(401).send({message: 'failed login'})
      }
  },
  logout: (req, res) => {
    // tested in post man and correctly destroys the session
    //   console.log(req.session)
      req.session.destroy()
    //   console.log(req.session)
      res.status(200).send({message: 'logged out', loggedIn: false})
  }
};
