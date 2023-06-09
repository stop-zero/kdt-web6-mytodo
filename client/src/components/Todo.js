import '../styles/Todo.scss';
import React from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';

// 반복될 할 일 하나하나
import { useState } from 'react';
const Todo = ({ item, deleteItem, updateItem }) => {
  //   console.log(item); //{done : 1, id: 1, title: ""}
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
  };

  // title input 을 클릭; readOnly state를 false로 변경
  const offReadOnlyMode = () => {
    setReadOnly(false); // title input이 편집이 가능한 상태
  };

  // tile input 에서 enter키 : readOnly state 를 true로 변경
  const EnterKeyEventHandle = (e) => {
    if (e.key === 'Enter') {
      setReadOnly(true);
      updateItem(todoItem); // 수정1 - text input에서 enter 누르면 수정 완료
    }
  };

  // 사용자가 키보드 입력할 때마다 item의 title을 입력한 값으로 변경
  const editEventHandler = (e) => {
    // rest: id, done 정보
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  // checkbox의 체크 여부에 따라 todoITem state 의 done 상태값을 변경
  const checkboxEventHandler = (e) => {
    // console.log(todoItem);
    //체크박스의 done 값만 넣은 것.
    //e.target.checked
    //rest : id, title 정보
    const { done, ...rest } = todoItem;
    const updatedItem = {
      done: e.target.checked,
      ...rest,
    };

    setTodoItem(updatedItem);
    updateItem(updatedItem);
    // todoItem.done = !todoItem.done;
  };

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${item.id}`}
        name={`todo${item.id}`}
        value={`todo${item.id}`}
        defaultChecked={item.done}
        onChange={checkboxEventHandler}
      />
      <label htmlFor={`todo${item.id}`}></label>
      <input
        type="text"
        value={todoItem.title}
        onClick={offReadOnlyMode}
        onKeyPress={EnterKeyEventHandle}
        onChange={editEventHandler}
        style={{ textDecoration: todoItem.done ? 'line-through' : 'none', textDecorationColor: todoItem.done ? 'red' : 'black'}}
      />

      <AiOutlineCloseSquare
        onClick={onDeleteButtonClick}
      ></AiOutlineCloseSquare>
    </div>
  );
};
export default Todo;
