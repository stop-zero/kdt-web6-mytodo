import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import { useState } from 'react';
import './styles/App.scss';

function App() {
  // todo마다 내용이 달라야함. 임시 상ㅌ ㅐ관리
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: '집에 가야 돼',
      done: false,
    },
    {
      id: 2,
      title: '저녁 뭐 먹지',
      done: false,
    },
    {
      id: 3,
      title: '모르겠어',
      done: true,
    },
  ]);

  // Todo 추가 함수
  const addItem = (newItem) => {
    // newItem => {title:'xxx'}
    newItem.id = todoItems.length + 1;
    newItem.done = false;
    // newItem => {title:'xxx', id:n, done: false}

    setTodoItems([...todoItems, newItem]);
  };

  // Todo 삭제하는 함수
  const deleteItem = (targetItem) => {
    // targetItem => { title: 'xxx', id: n, done: false}
    // 1. filter() targetItem의 id 와 todoItems 의 id가 같지 않은 애들을 새로운 애들로 반환
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    // 2. state 변경
    setTodoItems(newTodoItems);
  };

  return (
    <div className="App">
      <div className="box">
        <div className="title">
          <h2>TodoList</h2>
        </div>
        {/* todo 추가 input */}
        <AddTodo addItem={addItem} />
        {/* 현재 투두 목록 개수 보이기 */}
        <div className='left-todos'>📝 {todoItems.length} Todos</div> 
        {/* todo 목록 보이는 부분 */}
        {
          todoItems.length > 0 ?(
          todoItems.map((item) => {
            return <Todo key={item.id} item={item} deleteItem={deleteItem} />;
          })
          ) : <p className="empty-todos">Todo를 추가해주세요 </p>
        }
      </div>
    </div>
  );
}

export default App;
