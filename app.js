const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Hello from the server!'))

app.post('/login', (req, res) => {
    console.log('received details')

    const email = req.body.email
    console.log(email)
    const pass = req.body.password
    console.log(pass)

    if (email === 'test@test.com' && pass === 'test') {
        console.log('We have a member! 😀')
        res.redirect('http://localhost:3000/members')
        return
      } 
    
      console.log('Not a member 😞')
      res.redirect('http://localhost:3000/login')

})

app.post('/signup', (req,res) => {
  console.log('received sign up info')
  const email = req.body.email
  const password = req.body.password
  const password_confirmation = req.body.password_confirmation

  if (!email || !password || !password_confirmation) {
    res.status(400).send('Missing data')
    return
  }

  if (accountExists(email)) {
    res.status(403).send('Account already exists')
    return
  }

  if (password !== password_confirmation) {
    res.status(400).send('Passwords do not match')
    return
  }
  if (password.length < 8) {
    res.status(400).send('Passwords is invalid')
    return
  }
  createAccount(email, password)
	res.status(200).send('Account created')

})


const accountExists = (email) => {
  //here we should check if the account exists
  return false
}

const createAccount = (email, password) => {
  //here we should create the account
}

app.listen(3001, () => console.log('Server ready'))