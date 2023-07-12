const express = require('express')
const authenticateJWT = require('./src/auth')
const usersRouter = require('./src/routes/R-users')
const signinRouter = require('./src/routes/R-signin')
const signupRouter = require('./src/routes/R-signup')


const app = express()
const PORT = process.env.PORT || 5555

app.use(express.json())
app.use('/', usersRouter)
app.use('/', signinRouter)
app.use('/', signupRouter)




app.get('/', (req, res) => {
  res.json({
    message: "Welcome to my API!"
  })
})



app.listen(PORT, console.log('connected to the port'))