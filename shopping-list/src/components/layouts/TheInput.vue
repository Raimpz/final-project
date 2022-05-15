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
  /* background: red; */
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  height: 40px;
}

input {
  width: 100%;
  height: 100%;
  /* set padding 
  font-size
  */
}

button {
  /* 
  border: none; -> border: 1px solid black
  font-weight
  background-color
  padding: 0 ülevalt-alt, 0 vasakult-paremalt
  font-size
  */
  color: blue;
}

form div {
  position: absolute;
  top: -100%;
  width: 100%;
  text-align: center;
}

form div h3 {
  color: red;
}
</style>
