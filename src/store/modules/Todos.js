import axios from "axios";

export default {
  state: {
    todos: [],
    current: null,
  },
  mutations: {
    addTodo(state, value) {
      if (state.todoComplete == null) {
        state.todos = value;
      }
    },
    doneUpdateTodo(state, todo) {
      state.todos.forEach((t) => {
        if (t.id == todo.id) {
          t = todo;
        }
      });
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter((t) => {
        return t.id !== id;
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

    async deleteTodoItem(context, id) {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      context.commit("removeTodo", id);
    },
    async updateTodoItem(context, todo) {
      let res = await axios.put(`http://localhost:3000/todos/${todo.id}`, todo);
      context.commit("addTodo", res.data);
    },
  },
  getters: {
    myTodos(state) {
      return state.todos;
    },
  },
};
