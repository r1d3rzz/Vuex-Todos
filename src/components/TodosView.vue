<template>
  <div class="container">
    <div class="row">
      <h1 class="text-primary">Todos</h1>
      <div v-if="myTodos.length">
        <div
          class="card my-3 mx-auto w-50 shadow-sm"
          v-for="(todo, index) in myTodos"
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
    ...mapGetters(["myTodos"]),
  },
  methods: {
    ...mapActions(["fetchTodos"]),
  },
  mounted() {
    this.fetchTodos();
  },
};
</script>

<style>
</style>