import React, { useCallback, useReducer, useRef } from "react";
import "./App.css";
// import Lists from "./components/Lists/Lists";

// const Box: React.FunctionComponent = ({ children }) => {
//   return <div>{children}</div>;
// };

interface Todo {
  id: number;
  text: string;
}

type actionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

const reducerFunction = (state: Todo[], action: actionType) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
        },
      ];
    case "REMOVE":
      return state.filter(({ id }) => id !== action.id);
  }
};

function App() {
  const [todoList, dispatch] = useReducer(reducerFunction, []);

  const newTodoRef = useRef<HTMLInputElement>(null);

  const addTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value,
      });
      newTodoRef.current.value = "";
    }
  }, []);

  const removeTodo = (id: number) => {
    dispatch({ type: "REMOVE", id: id });
  };

  return (
    <div className="App container px-10">
      {/* <div className="my-5">
        <textarea className="border"></textarea>
      </div>
      <div>
        <p>test</p>
      </div> */}
      {/* <Box></Box> */}
      {/* <Lists /> */}
      <div className="my-5 py-1 bg-stone-100">
        <input className="border w-2/5" type="text" ref={newTodoRef} />
        <button
          className="bg-sky-800 text-slate-200 rounded-sm ml-3 px-5 py-0.5 text-center font-black"
          onClick={addTodo}
        >
          +
        </button>
      </div>

      <div className="grid gap-10 grid:cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-rows-3 grid-flow-row auto-rows-max px-20">
        {todoList?.map((todo, index) => (
          <div
            key={index}
            className="bg-slate-600 text-slate-200 py-10"
            style={{ position: "relative" }}
          >
            <span className="text-stone-50 font-extrabold">{todo?.text}</span>
            <button
              className="text-slate-200 rounded-sm ml-3 px-2 py-0 text-center font-black"
              onClick={() => removeTodo(todo?.id)}
              style={{ position: "absolute", top: 0, right: 0 }}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
