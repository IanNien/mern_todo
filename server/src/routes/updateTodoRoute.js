const TodoModel = require('../models/TodoModel');

module.exports = async(req, res) =>{
    const {id} = req.params;
    const todos = await TodoModel.findById(id);
    todos.completed = req.body.completed;
    todos.text = req.body.text;
    await todos.save();
    res.send(todos);
}