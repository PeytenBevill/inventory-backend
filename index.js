const express = require('express')
const authenticateJWT = require('./src/auth')
const usersRouter = require('./src/routes/R-users')
const signinRouter = require('./src/routes/R-signin')
const signupRouter = require('./src/routes/R-signup')
const postsRouter = require('./src/routes/R-posts')
const cors = require('cors')


const app = express()
const PORT = process.env.PORT || 5555

app.use(express.json())
app.use(cors())
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  // !!THiS IS FOR DEV - We replace this once we have our production URL in place.
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5174");

  // res.setHeader(
  //   "Access-Control-Allow-Origin",
  //   'https://main--papaya-paprenjak-1f5aa6.netlify.app'
  // );

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});


app.use('/', usersRouter)
app.use('/', signinRouter)
app.use('/', signupRouter)
app.use('/', postsRouter)




app.get('/', (req, res) => {
  res.json({
    message: "Welcome to my API!"
  })
})



app.listen(PORT, console.log('connected to the port'))