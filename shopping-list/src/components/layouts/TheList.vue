<template>
  <div class="the-list">
    <div class="shopping-item">
      <input type="checkbox" />
      <h3>{{ value }}</h3>
    </div>
    <div class="todo-buttons">
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.the-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.shopping-item {
  display: flex;
  align-items: center;
}
.todo-buttons {
  display: flex;
}
</style>
