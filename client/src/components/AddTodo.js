import { useState } from 'react';
import '../styles/AddTodo.scss';
import { AiFillPlusSquare } from 'react-icons/ai';

const AddTodo = ({ addItem }) => {
  //자식은 부모에게 접근못해, react는 단방향이기에, 상위에서 자식으로 옮기자!
  // const addItem = ()=>{
  //     //something
  // }
  const [todoItem, setTodoItem] = useState({
    title: '',
  });

  const OnButtonClick = (e) => {
    // // 빈값 입력
    // if (!todoItem.title.trim().length) {
    //   return;
    // }
    console.log(todoItem.title.length);
    if (!todoItem.title.length) {
      return;
    }

    // 1. props addItem 함수 실행
    addItem(todoItem);
    // 2. input 초기화
    setTodoItem({ title: '' });
    //
  };

  // Enter 입력
  const onEnterKeyDown = (e) => {
    if (e.key == 'Enter') {
      OnButtonClick();
    }
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="그냥 해 임마"
        value={todoItem.title}
        onKeyPress={onEnterKeyDown}
        onChange={(e) => {
          setTodoItem({ title: e.target.value });
        }}
      />
      <AiFillPlusSquare onClick={OnButtonClick}></AiFillPlusSquare>
    </div>
  );
};

export default AddTodo;
