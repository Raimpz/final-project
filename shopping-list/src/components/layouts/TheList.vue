<template>
  <div class="the-list">
    <div class="shopping-item">
      <input type="checkbox" @click="toggleItemInShoppingCart" />
      <h3 :class="isOnShoppingCart ? shoppingItemClass : ''">
        {{ shoppingItem }}
      </h3>
    </div>
    <div class="todo-buttons">
      <button>Edit</button>
      <button @click="deleteShoppingItem">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shoppingItem: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOnShoppingCart: false,
      shoppingItemClass: "crossedOut",
    };
  },
  methods: {
    toggleItemInShoppingCart() {
      this.isOnShoppingCart = !this.isOnShoppingCart;
      console.log(this.isOnShoppingCart);
    },
    deleteShoppingItem() {
      this.$emit("delete-shopping-item", this.id);
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

.crossedOut {
  text-decoration: line-through;
}
input {
  width: 15px;
  height: 15px;
}
</style>
