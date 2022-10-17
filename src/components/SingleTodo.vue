<template>
  <div class="card-body text-start todo" :class="{ complete: todo.complete }">
    <div class="d-flex justify-content-between">
      <div @click="showDetail = !showDetail" class="title">
        {{ todo.title }}
      </div>
      <div class="btn-group">
        <router-link :to="{ name: 'editTodo', params: { id: todo.id } }">
          <button class="btn btn-sm btn-secondary">edit</button>
        </router-link>
        <button class="btn btn-sm btn-danger" @click="deleteTodo(todo.id)">
          delete
        </button>
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
import Swal from "sweetalert2";
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
    async deleteTodo(id) {
      await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteTodoItem(id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    ...mapActions(["doneBtn", "deleteTodoItem"]),
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