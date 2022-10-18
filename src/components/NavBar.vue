<template>
  <div class="container mt-4">
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
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      toggle: false,
      unComplete: false,
    };
  },
  methods: {
    toggleBtn() {
      if (this.toggle == false) {
        this.unComplete = false;
        this.upDateCurrent("complete");
      } else {
        this.unComplete = true;
        this.upDateCurrent("onGoing");
      }
    },
    allTodos() {
      this.unComplete = false;
      this.toggle = false;
      this.upDateCurrent("all");
    },
    ...mapMutations(["upDateCurrent"]),
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