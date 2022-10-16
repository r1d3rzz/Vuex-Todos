import axios from "axios";

export default {
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, value) {
      state.todos = value;
    },
  },
  actions: {
    async fetchTodos(context) {
      let res = await axios("http://localhost:3000/todos");
      if (res.status === 404) return;
      let todos = res.data;
      context.commit("addTodo", todos);
    },
  },
  getters: {
    myTodos(state) {
      return state.todos;
    },
  },
};
