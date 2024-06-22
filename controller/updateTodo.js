const todo = require("../models/todo");
const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const response = await todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );
    res
      .status(200)
      .json({ success: true, data: response, message: "Successfully updated" });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      message: "Internal Server Error",
    });
  }
};

module.exports = updateTodo;
