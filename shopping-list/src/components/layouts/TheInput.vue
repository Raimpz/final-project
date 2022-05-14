<template>
  <form @submit.prevent="submitItem">
    <input type="text" v-model="enteredItem" />
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  emits: ["submit-item"],
  data() {
    return {
      enteredItem: "",
    };
  },
  methods: {
    submitItem() {
      if (this.enteredItem === "") {
        alert("Don't forget to input something!");
      } else {
        this.$emit("submit-item", this.enteredItem);
      }
      this.enteredItem = "";
    },
  },
};
</script>

<style scoped></style>
