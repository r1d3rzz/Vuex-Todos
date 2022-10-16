<template>
  <div class="card-body text-start todo" :class="{ complete: todo.complete }">
    <div class="d-flex justify-content-between">
      <div @click="showDetail = !showDetail" class="title">
        {{ todo.title }}
      </div>
      <div class="btn-group">
        <button class="btn btn-sm btn-secondary">edit</button>
        <button class="btn btn-sm btn-danger">delete</button>
        <button
          class="btn btn-sm btn-primary"
          :class="{ fadeBtn: todo.complete }"
          @click="doneButton(todo)"
        >
          done
        </button>
      </div>
    </div>
    <div v-if="showDetail">{{ todo.detail }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { ref } from "@vue/reactivity";
export default {
  props: ["todo"],
  setup() {
    let showDetail = ref(false);

    return { showDetail };
  },

  methods: {
    doneButton(todo) {
      todo.complete = !todo.complete;
      this.doneBtn(todo);
    },
    ...mapActions(["doneBtn"]),
  },
};
</script>

<style>
.title {
  user-select: none;
  cursor: pointer;
}
.todo {
  border: 1px solid transparent;
  border-left: 5px solid red;
}

.complete {
  border-left-color: blue;
}

.fadeBtn {
  opacity: 0.5;
}
</style>