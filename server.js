const express = require("express")
const router = require("./routers/router")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(router)

app.listen(3000, () =>{
    console.log(`server connection sucess http://localhost:3000`)
})