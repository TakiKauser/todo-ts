import { useCallback, useReducer, useRef } from "react";
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

const TodoPage = () => {
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
    <div className="container px-10">
      {/* <div className="my-5">
    <textarea className="border"></textarea>
  </div>
  <div>
    <p>test</p>
  </div> */}
      {/* <Box></Box> */}
      {/* <Lists /> */}
      <div className="py-1 my-5 bg-stone-100">
        <input className="w-2/5 border" type="text" ref={newTodoRef} />
        <button
          className="bg-sky-800 text-slate-200 rounded-sm ml-3 px-5 py-0.5 text-center font-black"
          onClick={addTodo}
        >
          +
        </button>
      </div>

      <div className="grid grid-flow-row grid-rows-3 gap-10 px-20 grid:cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max">
        {todoList?.map((todo, index) => (
          <div
            key={index}
            className="py-10 bg-slate-600 text-slate-200"
            style={{ position: "relative" }}
          >
            <span className="font-extrabold text-stone-50">{todo?.text}</span>
            <button
              className="px-2 py-0 ml-3 font-black text-center rounded-sm text-slate-200"
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
};

export default TodoPage;
