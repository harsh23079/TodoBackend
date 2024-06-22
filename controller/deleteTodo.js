const Todo = require("../models/todo");

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    console.log({ id });
    await Todo.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        data: err.message,
        message: "Internal Server Error",
      });
  }
};

module.exports = deleteTodo;
