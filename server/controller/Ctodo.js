const models = require('../models');
exports.main = (req, res) => {
  res.send('hi');
};
// 1. GET /todos => show all todo
exports.getTodo = async (req, res) => {
  const result = await models.Todo.findAll();
  res.send(result);
} 

// 2. POST /todo/create new todo
exports.postTodo = async (req, res) => {
  const result = await models.Todo.create({
    id: req.body.id,
    title: req.body.title,
    done: req.body.done,
  });
  res.send(result);
};

// 3. PATCH /todo/edit
exports.patchTodo = async (req, res) => {
  const result = await models.Todo.update(
    {
      id: req.params.todoId,
      title: req.body.title,
      done: req.body.done,
    },
    {
      where: { id: req.params.todoId },
    }
  );
  res.end();
};

// 4. DELETE /todo/delete
exports.deleteTodo = async (req, res) => {
  await models.Todo.destroy({
    where: { id: req.params.todoId },
  });
  res.end();
};
