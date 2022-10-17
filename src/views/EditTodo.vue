<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 text-start mx-auto mt-5">
        <div class="card">
          <form @submit.prevent="updateTodo">
            <div class="card-body">
              <div class="mb-3 form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="form.title"
                />
              </div>

              <div class="mb-3 form-group">
                <label for="detail">Detail</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="detail"
                  v-model="form.detail"
                />
              </div>

              <div class="d-flex justify-content-between">
                <div>
                  <button class="btn btn-sm btn-secondary">
                    <span v-if="!isRunning">Update</span>
                    <span class="d-flex align-items-center" v-if="isRunning"
                      ><div
                        style="width: 1.5rem; height: 1.5rem"
                        class="spinner-grow"
                        role="status"
                      >
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <div>Running</div>
                    </span>
                  </button>
                </div>
                <div>
                  <router-link :to="{ name: 'home' }">
                    <button class="btn btn-sm btn-primary">Back</button>
                  </router-link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import { mapActions } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      form: {
        id: "",
        title: "",
        detail: "",
        complete: false,
      },
      isRunning: false,
      Toast: Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      }),
    };
  },
  methods: {
    async getTodo() {
      let res = await axios.get(`http://localhost:3000/todos/${this.id}`);
      this.form.id = res.data.id;
      this.form.complete = false;
      this.form.title = res.data.title;
      this.form.detail = res.data.detail;
    },
    async updateTodo() {
      this.isRunning = true;
      await this.updateTodoItem(this.form);
      this.isRunning = false;
      this.Toast.fire({
        icon: "success",
        title: "Updated in successfully",
      });
      return this.$router.push({ name: "home" });
    },
    ...mapActions(["updateTodoItem"]),
  },
  mounted() {
    this.getTodo();
  },
};
</script>

<style>
</style>