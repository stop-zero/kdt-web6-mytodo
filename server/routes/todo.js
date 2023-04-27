const express = require('express');
const controller = require('../controller/Ctodo');
const router = express.Router(); //객체 router로 라우터 생성

router.get('/', controller.main);

// 1. GET /todo => localhost:PORT/todo
router.get("/todos", controller.getTodo);

// 2. POST /todo/create new todo
router.post("/todo", controller.postTodo);

// 4. PATCH /todo/edit
router.post("/todo/:todoId", controller.patchTodo); //하나 수정

// 4. DELETE /todo/delete
router.delete("/todo/:todoId", controller.deleteTodo); //하나 삭제

module.exports = router;
