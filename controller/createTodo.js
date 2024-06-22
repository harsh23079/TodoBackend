const todo = require("../models/todo");

const create = async (req, res) => {
  try {
    const { title, description } = req.body;
    const response = await todo.create({ title, description });
    res
      .status(200)
      .json({ success: true, data: response, message: "Successfully created" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: error.message, message: "Internal Server Error" });
  }
};

module.exports = create;
