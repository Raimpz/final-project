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

<style scoped>


form {
  /* background-color: red;  */
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  height: 30px;
  
}
input {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  font-size: 15px;
}
button {
  height: 25px;
  border: 2px solid rgb(68, 38, 219);
  font-weight: 75px;
  background-color: rgb(201, 201, 244);
  padding: 0px 0px;
  border-radius: 5px;
  color: black;
  padding: 3px;
}
font div {
  position: absolute;
  top: -150%;
  width: 100%;
  text-align: center;
}

</style>