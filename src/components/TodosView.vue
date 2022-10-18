<template>
  <div class="container">
    <div class="row">
      <div v-if="myTodos.length">
        <div
          class="card my-3 mx-auto w-50 shadow-sm"
          v-for="(todo, index) in myTodosFilter()"
          :key="index"
        >
          <SingleTodo :todo="todo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleTodo from "./SingleTodo";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { SingleTodo },
  computed: {
    ...mapGetters(["myTodos", "myCurrent"]),
  },
  methods: {
    myTodosFilter() {
      if (this.myCurrent === "complete") {
        return this.myTodos.filter((t) => {
          return t.complete;
        });
      }

      if (this.myCurrent === "onGoing") {
        return this.myTodos.filter((t) => {
          return !t.complete;
        });
      }

      return this.myTodos;
    },
    ...mapActions(["fetchTodos"]),
  },
  mounted() {
    this.fetchTodos();
  },
};
</script>

<style>
</style>