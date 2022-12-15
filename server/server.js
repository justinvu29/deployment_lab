const express = require('express')
const cors = require('cors')
const path = require('path')

const Rollbar = require('rollbar')

const rollbar = new Rollbar ({
    accessToken: '10e44f6478bd471bb0293c8d6dd02d6a',
    captureUncaught: true,
    captureUnhandledRejections: true,
  })

  rollbar.log('DevOps Lab')

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static('public')) 

app.get('/', (req,res) => {
try {
    nonExistentFunction();
  } catch (error) {
    rollbar.error(error);
  }
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})

  



app.listen(4000, console.log("Server running on 4000."))