const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080;

//요청하는 곳의 포트번호가 다르더라도 허용
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('todos');
});

const todoRouter = require('./routes/todo');
app.use('/api', todoRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
