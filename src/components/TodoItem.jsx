/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  console.log(toggleCompleted);

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        disabled={todo.completed}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? (
          <svg
            data-name="Layer 1"
            id="Layer_1"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path d="M80.49,32.94,67.06,19.51A5.18,5.18,0,0,0,63.4,18H23.17A5.18,5.18,0,0,0,18,23.17V76.83A5.18,5.18,0,0,0,23.17,82H76.83A5.18,5.18,0,0,0,82,76.83V36.59A5.15,5.15,0,0,0,80.49,32.94ZM58.19,22V32.88H31.67V22ZM37.36,78V59.33H62.64V78ZM78,76.83A1.17,1.17,0,0,1,76.83,78H66.64V57.33a2,2,0,0,0-2-2H35.36a2,2,0,0,0-2,2V78H23.17A1.17,1.17,0,0,1,22,76.83V23.17A1.17,1.17,0,0,1,23.17,22h4.5V34.88a2,2,0,0,0,2,2H60.19a2,2,0,0,0,2-2V22H63.4a1.22,1.22,0,0,1,.83.34L77.66,35.77a1.15,1.15,0,0,1,.34.82ZM34.75,29.25v-3a2,2,0,0,1,4,0v3a2,2,0,0,1-4,0Z" />
          </svg>
        ) : (
          <svg
            height="18px"
            version="1.1"
            viewBox="0 0 18 18"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <desc />
            <defs />
            <g fill="none" id="Page-1" stroke="none">
              <g
                fill="#000000"
                id="Core"
                transform="translate(-213.000000, -129.000000)"
              >
                <g id="create" transform="translate(213.000000, 129.000000)">
                  <path
                    d="M0,14.2 L0,18 L3.8,18 L14.8,6.9 L11,3.1 L0,14.2 L0,14.2 Z M17.7,4 C18.1,3.6 18.1,3 17.7,2.6 L15.4,0.3 C15,-0.1 14.4,-0.1 14,0.3 L12.2,2.1 L16,5.9 L17.7,4 L17.7,4 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </g>
          </svg>
        )}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        <svg
          enableBackground="new 0 0 48 48"
          height="48px"
          version="1.1"
          viewBox="0 0 45 45"
          width="20px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Expanded">
            <g>
              <g>
                <path d="M41,48H7V7h34V48z M9,46h30V9H9V46z" />
              </g>
              <g>
                <path d="M35,9H13V1h22V9z M15,7h18V3H15V7z" />
              </g>
              <g>
                <path d="M16,41c-0.553,0-1-0.447-1-1V15c0-0.553,0.447-1,1-1s1,0.447,1,1v25C17,40.553,16.553,41,16,41z" />
              </g>
              <g>
                <path d="M24,41c-0.553,0-1-0.447-1-1V15c0-0.553,0.447-1,1-1s1,0.447,1,1v25C25,40.553,24.553,41,24,41z" />
              </g>
              <g>
                <path d="M32,41c-0.553,0-1-0.447-1-1V15c0-0.553,0.447-1,1-1s1,0.447,1,1v25C33,40.553,32.553,41,32,41z" />
              </g>
              <g>
                <rect height="2" width="48" y="7" />
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}

export default TodoItem;
