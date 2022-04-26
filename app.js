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


app.listen(3001, () => console.log('Server ready'))