require('dotenv').config();
const express = require('express')
const massive= require('massive')
const session = require('express-session')

const app = express()
const authCTRL = require('./controllers/authController')
const treasureCtrl = require('./controllers/treasureController')
const auth = require('./middleware/authMiddleware')

const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env

app.use(express.json())



massive(CONNECTION_STRING).then(dbInstance) = ()=>{
    app.set(db, dbInstance)
    console.log('database connected');
    

}
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 60000
    }
}))


app.post('/auth/register', authCTRL.register)
app.post('/auth/login', authCTRL.login)
app.post('/auth/logout', authCTRL.logout)

app.get('api/treasure/dragon', treasureCtrl.dragonTreasure)
app.get('api/treasure/user', treasureCtrl.getUserTreasure)
app.post('/api/treasure/user', auth.usersOnly, treasureCtrl.addUserTreasure)
app.get('/api/treasure/all', auth.usersOnly, treasureCtrl.getAllTreasure)

app.listen(SERVER_PORT, ()=> console.log('server yeet')
)