const express = require("express")
const router = express.Router()
const controller = require("../controller/controler_bebidas")
controller.createTable()

router.post("/add", controller.insert)
router.get("/cervejas", controller.selectAll) 
router.get("/cervejas/pornome", controller.selectForName)
router.delete("/cervejas/delete", controller.deleteForId)

module.exports = router