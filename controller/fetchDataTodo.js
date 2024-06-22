const todo = require("../models/todo");

const fetchDataTodo = async (req, res) => {
  try {
    const response = await todo.find({});
    res
      .status(200)
      .json({ success: true, data: response, message: "Successfully fetched" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: error.message, message: "Internal Server Error" });
  }
};

module.exports = fetchDataTodo;
