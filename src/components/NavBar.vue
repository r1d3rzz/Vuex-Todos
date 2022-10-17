<template>
  <div class="container">
    <div class="row">
      <div
        class="
          d-flex
          justify-content-between
          col-md-6
          mx-auto
          align-items-center
        "
      >
        <div @click="allTodos()" class="btn btn-sm btn-outline-primary">
          All Todos
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            v-model="toggle"
            @click="toggleBtn"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault"
            ><span class="completeText" :class="{ complete: toggle }">
              <span v-if="!unComplete">Complete</span>
            </span>
            <span v-if="unComplete" class="text-danger">On Going</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      complete: null,
      toggle: false,
      unComplete: false,
    };
  },
  methods: {
    toggleBtn() {
      if (this.toggle == false) {
        this.complete = "true";
        this.unComplete = false;
      } else {
        this.unComplete = true;
        this.complete = "false";
      }
    },
    allTodos() {
      this.unComplete = false;
      this.toggle = false;
    },
  },
};
</script>

<style>
.completeText {
  opacity: 0.2;
}

.complete {
  opacity: 1;
}
</style>