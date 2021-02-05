let nextId = 5;

export const create = (value) => ({
  type: "CREATE",
  todo: {
    id: nextId++,
    text: value,
    done: false,
  },
  id: "",
});

export const toggle = (id) => ({
  type: "TOGGLE",
  id: id,
});

export const remove = (id) => ({
  type: "REMOVE",
  id: id,
});

const initstate = {
  todos: [
    {
      id: 1,
      text: "프로젝트 생성하기",
      done: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링하기",
      done: true,
    },
    {
      id: 3,
      text: "Context 만들기",
      done: false,
    },
    {
      id: 4,
      text: "기능 구현하기",
      done: false,
    },
  ],
};

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "CREATE":
      return { todos: state.todos.concat(action.todo) };
    case "TOGGLE":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case "REMOVE":
      return { todos: state.todos.filter((todo) => todo.id !== action.id) };
    default:
      return state;
  }
};

export default reducer;
