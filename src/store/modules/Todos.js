import axios from "axios";

export default {
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, value) {
      state.todos = value;
    },
    doneUpdateTodo(state, todo) {
      state.todos.forEach((t) => {
        if (t.id == todo.id) {
          t = todo;
        }
      });
    },
  },
  actions: {
    async fetchTodos(context) {
      let res = await axios("http://localhost:3000/todos");
      if (res.status === 404) return;
      let todos = res.data;
      context.commit("addTodo", todos);
    },

    async doneBtn(context, todo) {
      let res = await axios.put(`http://localhost:3000/todos/${todo.id}`, todo);
      context.commit("doneUpdateTodo", res.data);
    },

    async addNewTodo(context, todo) {
      let res = await axios.post("http://localhost:3000/todos", todo);
      context.commit("addTodo", res.data);
    },
  },
  getters: {
    myTodos(state) {
      return state.todos;
    },
  },
};
