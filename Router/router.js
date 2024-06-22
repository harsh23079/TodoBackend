const express = require("express");
const router = express.Router();
const create = require("../controller/createTodo");
const fetchDataTodo = require("../controller/fetchDataTodo");
const updateTodo = require("../controller/updateTodo");
const deleteTodo = require("../controller/deleteTodo");
const fetchDataByIdTodo = require("../controller/fetchDataByIdTodo");

router.get("/", fetchDataTodo);
router.get("/:id", fetchDataByIdTodo);
router.post("/create", create);
router.put("/update/:id", updateTodo);
router.delete("/deleted/:id", deleteTodo);
module.exports = router;
