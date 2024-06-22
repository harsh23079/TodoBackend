const Todo = require("../models/todo");
const fetchDataByIdTodo = async (req, res) => {
  try {
    const id = req.params.id;
     
    const response = await Todo.findById(id);
    res.status(200).json({
      success: true,
      data: response,
      message: "Successfully fetched by an id",
    });
  } catch (err) {
     
    res.status(500).json({
      success: false,
      data: err.message,
      message: "Internal Server Error",
    });
  }
};

module.exports = fetchDataByIdTodo;
