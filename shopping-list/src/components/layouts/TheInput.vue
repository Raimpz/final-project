<template>
  <form @submit.prevent="submitItem">
    <input type="text" v-model="enteredItem" />
    <button>Submit</button>
    <div>
      <h3 v-if="showWarning === true">Don't forget to input something!</h3>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["submit-item"],
  data() {
    return {
      enteredItem: "",
      showWarning: false,
    };
  },
  methods: {
    submitItem() {
      if (this.enteredItem === "") {
        this.showWarning = true;
        setTimeout(() => {
          this.showWarning = false;
        }, 1000);
      } else {
        this.$emit("submit-item", this.enteredItem);
      }
      this.enteredItem = "";
    },
  },
};
</script>

<style scoped>
form {
  position: relative;
}

form div {
  position: absolute;
  top: -200%;
  width: 100%;
  text-align: center;
}

form div h3 {
  color: red;
}
</style>
